import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { ChatItem } from './ChatItem';

interface ChatItemData {
    id: string;
    title: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
    avatar: string;
}

interface ChatListProps {
    searchQuery: string;
}

export function ChatList({ searchQuery }: ChatListProps) {
    // 模拟数据 - 实际应用中这些数据应该从状态管理或API获取
    const chatData: ChatItemData[] = [
        {
            id: '1',
            title: 'AI助手 - 小智',
            lastMessage: '你好！我是你的AI助手，有什么可以帮助你的吗？',
            timestamp: '刚刚',
            unreadCount: 0,
            avatar: '🤖',
        },
        {
            id: '2',
            title: 'AI助手 - 小助手',
            lastMessage: '我已经为你准备好了今天的学习计划',
            timestamp: '10:30',
            unreadCount: 2,
            avatar: '🧠',
        },
        {
            id: '3',
            title: 'AI助手 - 创意精灵',
            lastMessage: '这个创意很棒！让我们继续深入探讨...',
            timestamp: '昨天',
            unreadCount: 0,
            avatar: '✨',
        },
    ];

    // 过滤搜索结果
    const filteredChats = chatData.filter(chat =>
        chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleChatPress = (chatId: string) => {
        // TODO: 导航到聊天详情页
        console.log('打开聊天:', chatId);
    };

    const renderChatItem = ({ item }: { item: ChatItemData }) => (
        <ChatItem
            chat={item}
            onPress={() => handleChatPress(item.id)}
        />
    );

    if (filteredChats.length === 0) {
        return (
            <ThemedView style={styles.emptyContainer}>
                <ThemedText style={styles.emptyText}>
                    {searchQuery ? '没有找到相关对话' : '还没有对话，开始创建吧！'}
                </ThemedText>
            </ThemedView>
        );
    }

    return (
        <FlatList
            data={filteredChats}
            renderItem={renderChatItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
            showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyText: {
        fontSize: 16,
        textAlign: 'center',
        opacity: 0.6,
    },
});
