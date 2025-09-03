import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { ChatList } from '../../components/chat/ChatList';
import { SearchBar } from '../../components/ui/SearchBar';

export default function ChatListScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNewChat = () => {
    // TODO: 导航到新建对话页面
    console.log('新建对话');
  };

  return (
    <ThemedView style={styles.container}>
      {/* 顶部搜索栏 */}
      <View style={styles.header}>
        <ThemedText style={styles.title}>AI助手</ThemedText>
        <TouchableOpacity onPress={handleNewChat} style={styles.newChatButton}>
          <ThemedText style={styles.newChatText}>+</ThemedText>
        </TouchableOpacity>
      </View>

      {/* 搜索栏 */}
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="搜索AI助手或对话..."
        style={styles.searchBar}
      />

      {/* 聊天列表 */}
      <ChatList searchQuery={searchQuery} />
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
    paddingBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  newChatButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newChatText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
