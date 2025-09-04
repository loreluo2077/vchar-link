import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: string;
}

export default function VcharScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // 模拟联系人数据
  const contacts: Contact[] = [
    { id: '1', name: '张三', avatar: '👨', status: 'online' },
    { id: '2', name: '李四', avatar: '👩', status: 'online' },
    { id: '3', name: '王五', avatar: '👨‍💼', status: 'away' },
    { id: '4', name: '赵六', avatar: '👩‍💻', status: 'offline', lastSeen: '2小时前' },
    { id: '5', name: '钱七', avatar: '👨‍🎨', status: 'online' },
    { id: '6', name: '孙八', avatar: '👩‍🏫', status: 'offline', lastSeen: '昨天' },
    { id: '7', name: '周九', avatar: '👨‍🔬', status: 'away' },
    { id: '8', name: '吴十', avatar: '👩‍⚕️', status: 'online' },
    { id: '9', name: '郑十一', avatar: '👨‍💻', status: 'offline', lastSeen: '3天前' },
    { id: '10', name: '王十二', avatar: '👩‍🎭', status: 'online' },
    { id: '11', name: '冯十三', avatar: '👨‍🚀', status: 'away' },
    { id: '12', name: '陈十四', avatar: '👩‍🏭', status: 'offline', lastSeen: '1周前' },
    { id: '13', name: '褚十五', avatar: '👨‍🎓', status: 'online' },
    { id: '14', name: '卫十六', avatar: '👩‍🔧', status: 'online' },
    { id: '15', name: '蒋十七', avatar: '👨‍🌾', status: 'away' },
  ];

  // 按字母分组
  const groupedContacts = contacts.reduce((groups, contact) => {
    const firstLetter = contact.name.charAt(0).toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(contact);
    return groups;
  }, {} as Record<string, Contact[]>);

  // 排序字母
  const sortedLetters = Object.keys(groupedContacts).sort();

  const handleContactPress = (contact: Contact) => {
    console.log('点击联系人:', contact.name);
    // TODO: 导航到聊天页面或联系人详情页
  };

  const renderContactItem = ({ item }: { item: Contact }) => (
    <TouchableOpacity style={styles.contactItem} onPress={() => handleContactPress(item)}>
      <View style={styles.avatarContainer}>
        <ThemedText style={styles.avatar}>{item.avatar}</ThemedText>
        <View style={[styles.statusDot, styles[`status${item.status}`]]} />
      </View>
      <View style={styles.contactInfo}>
        <ThemedText style={styles.contactName}>{item.name}</ThemedText>
        <ThemedText style={styles.contactStatus}>
          {item.status === 'online' ? '在线' :
            item.status === 'away' ? '离开' :
              `最后在线 ${item.lastSeen}`}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ item }: { item: string }) => (
    <View style={styles.sectionHeader}>
      <ThemedText style={styles.sectionTitle}>{item}</ThemedText>
    </View>
  );

  const renderSection = ({ item: letter }: { item: string }) => (
    <View key={letter}>
      {renderSectionHeader({ item: letter })}
      {groupedContacts[letter].map(contact => (
        <View key={contact.id}>
          {renderContactItem({ item: contact })}
        </View>
      ))}
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      {/* 头部 */}
      <View style={styles.header}>
        <ThemedText style={styles.title}>通讯录</ThemedText>
        <TouchableOpacity style={styles.addButton}>
          <ThemedText style={styles.addIcon}>+</ThemedText>
        </TouchableOpacity>
      </View>

      {/* 搜索栏 */}
      <View style={styles.searchContainer}>
        <ThemedText style={styles.searchIcon}>🔍</ThemedText>
        <ThemedText style={styles.searchPlaceholder}>搜索联系人...</ThemedText>
      </View>

      {/* 联系人列表 */}
      <FlatList
        data={sortedLetters}
        renderItem={renderSection}
        keyExtractor={(item) => item}
        style={styles.contactList}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
    opacity: 0.6,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#999',
  },
  contactList: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    fontSize: 40,
  },
  statusDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  statusonline: {
    backgroundColor: '#4CD964',
  },
  statusaway: {
    backgroundColor: '#FF9500',
  },
  statusoffline: {
    backgroundColor: '#8E8E93',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  contactStatus: {
    fontSize: 14,
    opacity: 0.6,
  },
});
