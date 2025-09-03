import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

interface ChatHeaderProps {
    title: string;
    avatar: string;
    onBack: () => void;
}

export function ChatHeader({ title, avatar, onBack }: ChatHeaderProps) {
    return (
        <ThemedView style={styles.container}>
            {/* 状态栏占位 */}
            <View style={styles.statusBar} />

            {/* 头部内容 */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <ThemedText style={styles.backIcon}>←</ThemedText>
                </TouchableOpacity>

                <View style={styles.avatarContainer}>
                    <ThemedText style={styles.avatar}>{avatar}</ThemedText>
                </View>

                <View style={styles.titleContainer}>
                    <ThemedText style={styles.title} numberOfLines={1}>
                        {title}
                    </ThemedText>
                    <ThemedText style={styles.subtitle}>在线</ThemedText>
                </View>

                <TouchableOpacity style={styles.moreButton}>
                    <ThemedText style={styles.moreIcon}>⋯</ThemedText>
                </TouchableOpacity>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E5E5',
    },
    statusBar: {
        height: 44,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        height: 60,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    backIcon: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatarContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    avatar: {
        fontSize: 18,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 12,
        opacity: 0.6,
    },
    moreButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    moreIcon: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
