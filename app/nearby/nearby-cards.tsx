import { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Location from "expo-location";
import { getRandomPokemon } from "../../services/pokeapi";
import { useUser } from "../../contexts/UserContext";

type NearbyPokemon = {
  id: string;
  name: string;
  image: string;
  x: number;
  y: number;
};

const SPAWN_MS = 12000;
const MAX_POKEMON = 8;

export default function NearbyCards() {
    const { addCard } = useUser();
    const [permission, setPermission] = useState<boolean | null>(null);
    const [locationText, setLocationText] = useState<string>("Cargando ubicación...");
    const [pokemons, setPokemons] = useState<NearbyPokemon[]>([]);

  useEffect(() => {
    const requestLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setPermission(false);
          setLocationText("Sin permiso de ubicación");
          return;
        }
  
        setPermission(true);
        const current = await Location.getCurrentPositionAsync({});
        setLocationText(
          `Lat: ${current.coords.latitude.toFixed(4)} | Lon: ${current.coords.longitude.toFixed(4)}`
        );
      };
  
      requestLocation();
  }, []);

  useEffect(() => {
    if (permission !== true) return;

    const spawnPokemon = async () => {
      const pokemon = await getRandomPokemon();
      const image = pokemon.sprites?.front_default;
      if (!image) return;

      const nextPokemon: NearbyPokemon = {
        id: `${pokemon.id}-${Date.now()}`,
        name: pokemon.name,
        image,
        x: Math.max(12, Math.floor(Math.random() * 260)),
        y: Math.max(12, Math.floor(Math.random() * 420)),
      };

      setPokemons((prev) => [nextPokemon, ...prev].slice(0, MAX_POKEMON));
    };

    spawnPokemon();
    const interval = setInterval(spawnPokemon, SPAWN_MS);
    return () => clearInterval(interval);
  }, [permission]);

  const helperText = useMemo(() => {
    if (permission === false) return "Activa permisos de ubicación para usar el mapa.";
    if (permission === null) return "Solicitando permisos...";
    return "Cada cierto tiempo aparecerán Pokémon de forma aleatoria.";
  }, [permission]);

  const claimPokemon = (pokemon: NearbyPokemon) => {
    addCard({
      id: pokemon.id,
      name: pokemon.name,
      sprites: { front_default: pokemon.image },
    });

    setPokemons((prev) => prev.filter((p) => p.id !== pokemon.id));
    Alert.alert("¡Pokémon capturado!", `${pokemon.name.toUpperCase()} se agregó a tu colección.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.helper}>{helperText}</Text>
      <Text style={styles.location}>{locationText}</Text>

      <View style={styles.mapArea}>
        {pokemons.map((pokemon) => (
          <TouchableOpacity
            key={pokemon.id}
            style={[styles.marker, { left: pokemon.x, top: pokemon.y }]}
            onPress={() => claimPokemon(pokemon)}
          >
            <Text style={styles.markerText}>⚡ {pokemon.name}</Text>
          </TouchableOpacity>
        ))}
        </View>
  
        <TouchableOpacity
          style={styles.spawnButton}
          onPress={async () => {
            const pokemon = await getRandomPokemon();
            const image = pokemon.sprites?.front_default;
            if (!image) return;
            setPokemons((prev) => [
              {
                id: `${pokemon.id}-${Date.now()}`,
                name: pokemon.name,
                image,
                x: Math.max(12, Math.floor(Math.random() * 260)),
                y: Math.max(12, Math.floor(Math.random() * 420)),
              },
              ...prev,
            ]);
          }}
        >
          <Text style={styles.spawnButtonText}>Generar Pokémon ahora</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000", padding: 12 },
    helper: { color: "#fff", marginBottom: 8, textAlign: "center" },
    location: { color: "#facc15", marginBottom: 8, textAlign: "center" },
    mapArea: {
      flex: 1,
      borderRadius: 12,
      backgroundColor: "#0b1220",
      borderColor: "#1d4ed8",
      borderWidth: 1,
      position: "relative",
      overflow: "hidden",
    },
    marker: {
      position: "absolute",
      backgroundColor: "rgba(17,17,17,0.9)",
      borderWidth: 1,
      borderColor: "#facc15",
      borderRadius: 999,
      paddingVertical: 4,
      paddingHorizontal: 10,
    },
    markerText: { color: "#fff", fontSize: 12 },
    spawnButton: {
      marginTop: 10,
      backgroundColor: "#111",
      borderColor: "#facc15",
      borderWidth: 2,
      borderRadius: 10,
      paddingVertical: 12,
    },
    spawnButtonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
  });