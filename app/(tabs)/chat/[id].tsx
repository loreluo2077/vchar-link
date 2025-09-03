import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { ThemedView } from '../../../components/ThemedView';
import { ChatHeader } from '../../../components/chat/ChatHeader';
import { ChatInput } from '../../../components/chat/ChatInput';
import { MessageList } from '../../../components/chat/MessageList';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    status: 'sending' | 'sent' | 'error';
}

export default function ChatScreen() {
    const { id } = useLocalSearchParams();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: '你好！我是你的AI助手，有什么可以帮助你的吗？',
            isUser: false,
            timestamp: new Date(),
            status: 'sent',
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const flatListRef = useRef<FlatList>(null);

    // 模拟AI回复
    const simulateAIResponse = async (userMessage: string) => {
        setIsTyping(true);

        // 模拟延迟
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

        const responses = [
            '我理解你的问题，让我来帮你分析一下...',
            '这是一个很有趣的话题！',
            '根据我的理解，我认为...',
            '让我为你提供一些建议...',
            '这个问题可以从多个角度来思考...',
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        const aiMessage: Message = {
            id: Date.now().toString(),
            text: randomResponse,
            isUser: false,
            timestamp: new Date(),
            status: 'sent',
        };

        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
    };

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: text.trim(),
            isUser: true,
            timestamp: new Date(),
            status: 'sending',
        };

        setMessages(prev => [...prev, userMessage]);

        // 模拟发送状态
        setTimeout(() => {
            setMessages(prev =>
                prev.map(msg =>
                    msg.id === userMessage.id
                        ? { ...msg, status: 'sent' as const }
                        : msg
                )
            );
        }, 500);

        // 触发AI回复
        simulateAIResponse(text);
    };

    const scrollToBottom = () => {
        if (flatListRef.current && messages.length > 0) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <ThemedView style={styles.container}>
            {/* 聊天头部 */}
            <ChatHeader
                title="AI助手 - 小智"
                avatar="🤖"
                onBack={() => router.back()}
            />

            {/* 消息列表 */}
            <MessageList
                ref={flatListRef}
                messages={messages}
                isTyping={isTyping}
                style={styles.messageList}
            />

            {/* 输入框 */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputContainer}
            >
                <ChatInput onSendMessage={handleSendMessage} />
            </KeyboardAvoidingView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageList: {
        flex: 1,
    },
    inputContainer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#E5E5E5',
    },
});
