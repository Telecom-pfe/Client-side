import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
       
        headerStyle: {
          backgroundColor: '#ADD8E6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}