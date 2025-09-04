import { router } from 'expo-router';
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
        {
            id: '4',
            title: 'AI助手 - 编程专家',
            lastMessage: '这段代码可以这样优化，提高性能...',
            timestamp: '昨天',
            unreadCount: 1,
            avatar: '💻',
        },
        {
            id: '5',
            title: 'AI助手 - 健康顾问',
            lastMessage: '根据你的情况，建议你多运动...',
            timestamp: '2天前',
            unreadCount: 0,
            avatar: '🏥',
        },
        {
            id: '6',
            title: 'AI助手 - 财务顾问',
            lastMessage: '你的投资组合看起来不错，建议...',
            timestamp: '3天前',
            unreadCount: 0,
            avatar: '💰',
        },
        {
            id: '7',
            title: 'AI助手 - 旅行规划师',
            lastMessage: '这次旅行我为你准备了详细的攻略...',
            timestamp: '3天前',
            unreadCount: 0,
            avatar: '✈️',
        },
        {
            id: '8',
            title: 'AI助手 - 美食达人',
            lastMessage: '这道菜的做法很简单，首先...',
            timestamp: '4天前',
            unreadCount: 0,
            avatar: '🍳',
        },
        {
            id: '9',
            title: 'AI助手 - 语言导师',
            lastMessage: '今天我们来学习新的语法点...',
            timestamp: '4天前',
            unreadCount: 0,
            avatar: '📚',
        },
        {
            id: '10',
            title: 'AI助手 - 心理咨询师',
            lastMessage: '我理解你的感受，让我们一起来分析...',
            timestamp: '5天前',
            unreadCount: 0,
            avatar: '🧘',
        },
        {
            id: '11',
            title: 'AI助手 - 健身教练',
            lastMessage: '今天的训练计划包括有氧运动...',
            timestamp: '5天前',
            unreadCount: 0,
            avatar: '💪',
        },
        {
            id: '12',
            title: 'AI助手 - 音乐制作人',
            lastMessage: '这个旋律很有潜力，我们可以...',
            timestamp: '6天前',
            unreadCount: 0,
            avatar: '🎵',
        },
    ];

    // 过滤搜索结果
    const filteredChats = chatData.filter(chat =>
        chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleChatPress = (chatId: string) => {
        // 导航到聊天详情页
        router.push(`/chat-detail/${chatId}`);
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
