import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

interface ChatInputProps {
    onSendMessage: (text: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSendMessage(text);
            setText('');
        }
    };

    const isSendDisabled = !text.trim();

    return (
        <ThemedView style={styles.container}>
            <View style={styles.inputContainer}>
                {/* 功能按钮区域 */}
                <View style={styles.functionButtons}>
                    <TouchableOpacity style={styles.functionButton}>
                        <ThemedText style={styles.functionIcon}>📷</ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.functionButton}>
                        <ThemedText style={styles.functionIcon}>🎤</ThemedText>
                    </TouchableOpacity>
                </View>

                {/* 文本输入框 */}
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={text}
                        onChangeText={setText}
                        placeholder="输入消息..."
                        placeholderTextColor="#999"
                        multiline
                        maxLength={1000}
                        textAlignVertical="center"
                        returnKeyType="default"
                        blurOnSubmit={false}
                    />
                </View>

                {/* 发送按钮 */}
                <TouchableOpacity
                    style={[styles.sendButton, isSendDisabled && styles.sendButtonDisabled]}
                    onPress={handleSend}
                    disabled={isSendDisabled}
                >
                    <ThemedText style={[
                        styles.sendButtonText,
                        isSendDisabled && styles.sendButtonTextDisabled
                    ]}>
                        发送
                    </ThemedText>
                </TouchableOpacity>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#F8F8F8',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        minHeight: 44,
    },
    functionButtons: {
        flexDirection: 'row',
        marginRight: 8,
    },
    functionButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    functionIcon: {
        fontSize: 18,
    },
    textInputContainer: {
        flex: 1,
        maxHeight: 100,
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 16,
        lineHeight: 20,
        paddingVertical: 8,
        color: '#000',
    },
    sendButton: {
        backgroundColor: '#007AFF',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginLeft: 8,
        minWidth: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonDisabled: {
        backgroundColor: '#E0E0E0',
    },
    sendButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    sendButtonTextDisabled: {
        color: '#999',
    },
});
