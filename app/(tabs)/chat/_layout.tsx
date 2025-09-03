import { Stack } from 'expo-router';

export default function ChatLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    title: '聊天',
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
