import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 🔥 Quita la barra superior
      }}
    />
  );
}