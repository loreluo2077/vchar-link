import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { Button } from '../../components/ui/Button';

interface AIAssistant {
  id: string;
  name: string;
  description: string;
  avatar: string;
  category: string;
  rating: number;
  isPopular: boolean;
}

export default function ExploreScreen() {
  const aiAssistants: AIAssistant[] = [
    {
      id: '1',
      name: '小智 - 通用助手',
      description: '全能型AI助手，可以回答各种问题，帮助解决日常任务',
      avatar: '🤖',
      category: '通用',
      rating: 4.8,
      isPopular: true,
    },
    {
      id: '2',
      name: '小助手 - 学习导师',
      description: '专业的学习辅导AI，帮助你掌握各种知识和技能',
      avatar: '🧠',
      category: '教育',
      rating: 4.9,
      isPopular: true,
    },
    {
      id: '3',
      name: '创意精灵 - 创意助手',
      description: '激发你的创意灵感，帮助创作各种内容',
      avatar: '✨',
      category: '创意',
      rating: 4.7,
      isPopular: false,
    },
    {
      id: '4',
      name: '编程助手 - 代码专家',
      description: '专业的编程指导，帮助你解决代码问题',
      avatar: '💻',
      category: '技术',
      rating: 4.6,
      isPopular: false,
    },
    {
      id: '5',
      name: '健康顾问 - 健康管理',
      description: '提供健康建议和生活方式指导',
      avatar: '🏥',
      category: '健康',
      rating: 4.5,
      isPopular: false,
    },
  ];

  const handleStartChat = (assistant: AIAssistant) => {
    // TODO: 导航到聊天页面
    console.log('开始与', assistant.name, '聊天');
  };

  const handleCreateCustom = () => {
    // TODO: 导航到创建自定义AI助手页面
    console.log('创建自定义AI助手');
  };

  const renderPopularSection = () => {
    const popularAssistants = aiAssistants.filter(a => a.isPopular);

    return (
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>🔥 热门推荐</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularAssistants.map(assistant => (
            <TouchableOpacity
              key={assistant.id}
              style={styles.popularCard}
              onPress={() => handleStartChat(assistant)}
            >
              <View style={styles.popularAvatar}>
                <ThemedText style={styles.popularAvatarText}>{assistant.avatar}</ThemedText>
              </View>
              <ThemedText style={styles.popularName} numberOfLines={1}>
                {assistant.name}
              </ThemedText>
              <ThemedText style={styles.popularRating}>⭐ {assistant.rating}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const renderCategorySection = () => {
    const categories = ['通用', '教育', '创意', '技术', '健康'];

    return (
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>📂 分类浏览</ThemedText>
        <View style={styles.categoryGrid}>
          {categories.map(category => (
            <TouchableOpacity key={category} style={styles.categoryCard}>
              <ThemedText style={styles.categoryText}>{category}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderAssistantList = () => {
    return (
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>🤖 所有AI助手</ThemedText>
        {aiAssistants.map(assistant => (
          <TouchableOpacity
            key={assistant.id}
            style={styles.assistantCard}
            onPress={() => handleStartChat(assistant)}
          >
            <View style={styles.assistantHeader}>
              <View style={styles.assistantAvatar}>
                <ThemedText style={styles.assistantAvatarText}>{assistant.avatar}</ThemedText>
              </View>
              <View style={styles.assistantInfo}>
                <ThemedText style={styles.assistantName}>{assistant.name}</ThemedText>
                <ThemedText style={styles.assistantCategory}>{assistant.category}</ThemedText>
              </View>
              <View style={styles.assistantRating}>
                <ThemedText style={styles.ratingText}>⭐ {assistant.rating}</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.assistantDescription} numberOfLines={2}>
              {assistant.description}
            </ThemedText>
            <Button
              title="开始聊天"
              onPress={() => handleStartChat(assistant)}
              variant="outline"
              size="small"
              style={styles.startChatButton}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 头部 */}
        <View style={styles.header}>
          <ThemedText style={styles.title}>发现AI助手</ThemedText>
          <ThemedText style={styles.subtitle}>
            探索各种专业的AI助手，找到最适合你的智能伙伴
          </ThemedText>
        </View>

        {/* 创建自定义AI助手 */}
        <View style={styles.createSection}>
          <Button
            title="创建自定义AI助手"
            onPress={handleCreateCustom}
            variant="primary"
            size="large"
            style={styles.createButton}
          />
        </View>

        {/* 热门推荐 */}
        {renderPopularSection()}

        {/* 分类浏览 */}
        {renderCategorySection()}

        {/* AI助手列表 */}
        {renderAssistantList()}
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
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    lineHeight: 22,
  },
  createSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  createButton: {
    width: '100%',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  popularCard: {
    width: 120,
    alignItems: 'center',
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  popularAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  popularAvatarText: {
    fontSize: 24,
  },
  popularName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  popularRating: {
    fontSize: 12,
    opacity: 0.7,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryCard: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    minWidth: 80,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  assistantCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  assistantHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  assistantAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  assistantAvatarText: {
    fontSize: 18,
  },
  assistantInfo: {
    flex: 1,
  },
  assistantName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  assistantCategory: {
    fontSize: 12,
    opacity: 0.6,
  },
  assistantRating: {
    alignItems: 'flex-end',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
  },
  assistantDescription: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.7,
    marginBottom: 16,
  },
  startChatButton: {
    alignSelf: 'flex-end',
  },
});
