import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function MineScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.icon}>👤</ThemedText>
        <ThemedText style={styles.title}>个人中心</ThemedText>
        <ThemedText style={styles.subtitle}>正在开发中...</ThemedText>
        <ThemedText style={styles.description}>
          这个功能正在开发中，敬请期待！
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  icon: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.7,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    opacity: 0.6,
    textAlign: 'center',
    lineHeight: 24,
  },
});
