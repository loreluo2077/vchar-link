import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    status: 'sending' | 'sent' | 'error';
}

interface ChatBubbleProps {
    message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);

        if (minutes < 1) return '刚刚';
        if (minutes < 60) return `${minutes}分钟前`;

        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}小时前`;

        return date.toLocaleDateString();
    };

    const getStatusIcon = (status: Message['status']) => {
        switch (status) {
            case 'sending':
                return '⏳';
            case 'sent':
                return '✓';
            case 'error':
                return '❌';
            default:
                return '';
        }
    };

    return (
        <View style={[
            styles.container,
            message.isUser ? styles.userContainer : styles.aiContainer
        ]}>
            {/* 头像 */}
            <View style={[
                styles.avatar,
                message.isUser ? styles.userAvatar : styles.aiAvatar
            ]}>
                <ThemedText style={styles.avatarText}>
                    {message.isUser ? '👤' : '🤖'}
                </ThemedText>
            </View>

            {/* 消息内容 */}
            <View style={[
                styles.bubble,
                message.isUser ? styles.userBubble : styles.aiBubble
            ]}>
                <ThemedText style={[
                    styles.messageText,
                    message.isUser ? styles.userText : styles.aiText
                ]}>
                    {message.text}
                </ThemedText>

                {/* 时间戳和状态 */}
                <View style={styles.footer}>
                    <ThemedText style={styles.timestamp}>
                        {formatTime(message.timestamp)}
                    </ThemedText>

                    {message.isUser && (
                        <ThemedText style={styles.status}>
                            {getStatusIcon(message.status)}
                        </ThemedText>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    userContainer: {
        justifyContent: 'flex-end',
    },
    aiContainer: {
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    userAvatar: {
        backgroundColor: '#007AFF',
    },
    aiAvatar: {
        backgroundColor: '#F0F0F0',
    },
    avatarText: {
        fontSize: 16,
    },
    bubble: {
        maxWidth: '70%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 18,
    },
    userBubble: {
        backgroundColor: '#007AFF',
        borderBottomRightRadius: 4,
    },
    aiBubble: {
        backgroundColor: '#F2F2F7',
        borderBottomLeftRadius: 4,
    },
    messageText: {
        fontSize: 16,
        lineHeight: 22,
    },
    userText: {
        color: 'white',
    },
    aiText: {
        color: '#000',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    timestamp: {
        fontSize: 11,
        opacity: 0.6,
    },
    status: {
        fontSize: 12,
        marginLeft: 8,
    },
});
