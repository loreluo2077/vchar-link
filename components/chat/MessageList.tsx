import React, { forwardRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ChatBubble } from './ChatBubble';
import { TypingIndicator } from './TypingIndicator';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    status: 'sending' | 'sent' | 'error';
}

interface MessageListProps {
    messages: Message[];
    isTyping: boolean;
    style?: any;
}

export const MessageList = forwardRef<FlatList, MessageListProps>(
    ({ messages, isTyping, style }, ref) => {
        const renderMessage = ({ item }: { item: Message }) => (
            <ChatBubble message={item} />
        );

        const renderTypingIndicator = () => {
            if (!isTyping) return null;
            return <TypingIndicator />;
        };

        const renderSeparator = () => <View style={styles.separator} />;

        return (
            <FlatList
                ref={ref}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                style={[styles.container, style]}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={renderTypingIndicator}
                ItemSeparatorComponent={renderSeparator}
                onEndReachedThreshold={0.1}
            />
        );
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    separator: {
        height: 8,
    },
});
