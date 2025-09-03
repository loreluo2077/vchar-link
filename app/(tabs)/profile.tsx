import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { Button } from '../../components/ui/Button';

export default function ProfileScreen() {
    const handleCreateAI = () => {
        // TODO: 导航到创建AI助手页面
        console.log('创建AI助手');
    };

    const handleSettings = () => {
        // TODO: 导航到设置页面
        console.log('设置');
    };

    const handleHistory = () => {
        // TODO: 导航到对话历史页面
        console.log('对话历史');
    };

    return (
        <ThemedView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* 用户信息区域 */}
                <View style={styles.userSection}>
                    <View style={styles.avatarContainer}>
                        <ThemedText style={styles.avatar}>👤</ThemedText>
                    </View>
                    <ThemedText style={styles.userName}>用户</ThemedText>
                    <ThemedText style={styles.userEmail}>user@example.com</ThemedText>
                </View>

                {/* 快速操作 */}
                <View style={styles.quickActions}>
                    <Button
                        title="创建AI助手"
                        onPress={handleCreateAI}
                        variant="primary"
                        size="large"
                        style={styles.createButton}
                    />
                </View>

                {/* 功能菜单 */}
                <View style={styles.menuSection}>
                    <ThemedText style={styles.sectionTitle}>功能</ThemedText>

                    <TouchableOpacity style={styles.menuItem} onPress={handleHistory}>
                        <View style={styles.menuItemLeft}>
                            <ThemedText style={styles.menuIcon}>📚</ThemedText>
                            <ThemedText style={styles.menuText}>对话历史</ThemedText>
                        </View>
                        <ThemedText style={styles.menuArrow}>›</ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <ThemedText style={styles.menuIcon}>⭐</ThemedText>
                            <ThemedText style={styles.menuText}>收藏对话</ThemedText>
                        </View>
                        <ThemedText style={styles.menuArrow}>›</ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <ThemedText style={styles.menuIcon}>🔄</ThemedText>
                            <ThemedText style={styles.menuText}>数据同步</ThemedText>
                        </View>
                        <ThemedText style={styles.menuArrow}>›</ThemedText>
                    </TouchableOpacity>
                </View>

                {/* 设置菜单 */}
                <View style={styles.menuSection}>
                    <ThemedText style={styles.sectionTitle}>设置</ThemedText>

                    <TouchableOpacity style={styles.menuItem} onPress={handleSettings}>
                        <View style={styles.menuItemLeft}>
                            <ThemedText style={styles.menuIcon}>⚙️</ThemedText>
                            <ThemedText style={styles.menuText}>应用设置</ThemedText>
                        </View>
                        <ThemedText style={styles.menuArrow}>›</ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <ThemedText style={styles.menuIcon}>🌙</ThemedText>
                            <ThemedText style={styles.menuText}>主题设置</ThemedText>
                        </View>
                        <ThemedText style={styles.menuArrow}>›</ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <ThemedText style={styles.menuIcon}>🔒</ThemedText>
                            <ThemedText style={styles.menuText}>隐私设置</ThemedText>
                        </View>
                        <ThemedText style={styles.menuArrow}>›</ThemedText>
                    </TouchableOpacity>
                </View>

                {/* 关于信息 */}
                <View style={styles.aboutSection}>
                    <ThemedText style={styles.aboutText}>AI聊天助手 v1.0.0</ThemedText>
                    <ThemedText style={styles.aboutSubtext}>基于Expo + React Native构建</ThemedText>
                </View>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    scrollView: {
        flex: 1,
    },
    userSection: {
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        fontSize: 40,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    userEmail: {
        fontSize: 16,
        opacity: 0.6,
    },
    quickActions: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    createButton: {
        width: '100%',
    },
    menuSection: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E5E5',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    menuText: {
        fontSize: 16,
    },
    menuArrow: {
        fontSize: 18,
        opacity: 0.6,
    },
    aboutSection: {
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    aboutText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    aboutSubtext: {
        fontSize: 14,
        opacity: 0.6,
    },
});
