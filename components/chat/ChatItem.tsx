import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';

interface ChatItemData {
    id: string;
    title: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
    avatar: string;
}

interface ChatItemProps {
    chat: ChatItemData;
    onPress: () => void;
}

export function ChatItem({ chat, onPress }: ChatItemProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {/* 头像 */}
            <View style={styles.avatarContainer}>
                <ThemedText style={styles.avatar}>{chat.avatar}</ThemedText>
            </View>

            {/* 内容区域 */}
            <View style={styles.content}>
                <View style={styles.header}>
                    <ThemedText style={styles.title} numberOfLines={1}>
                        {chat.title}
                    </ThemedText>
                    <ThemedText style={styles.timestamp}>
                        {chat.timestamp}
                    </ThemedText>
                </View>

                <View style={styles.messageContainer}>
                    <ThemedText style={styles.lastMessage} numberOfLines={2}>
                        {chat.lastMessage}
                    </ThemedText>

                    {chat.unreadCount > 0 && (
                        <View style={styles.badge}>
                            <ThemedText style={styles.badgeText}>
                                {chat.unreadCount > 99 ? '99+' : chat.unreadCount}
                            </ThemedText>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E5E5',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    avatar: {
        fontSize: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
        marginRight: 10,
    },
    timestamp: {
        fontSize: 12,
        opacity: 0.6,
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    lastMessage: {
        fontSize: 14,
        opacity: 0.7,
        flex: 1,
        marginRight: 10,
    },
    badge: {
        backgroundColor: '#FF3B30',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },
});
