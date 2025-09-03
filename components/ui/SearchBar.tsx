import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    style?: any;
}

export function SearchBar({ value, onChangeText, placeholder = '搜索...', style }: SearchBarProps) {
    const handleClear = () => {
        onChangeText('');
    };

    return (
        <ThemedView style={[styles.container, style]}>
            <View style={styles.searchContainer}>
                <ThemedText style={styles.searchIcon}>🔍</ThemedText>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor="#999"
                    returnKeyType="search"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {value.length > 0 && (
                    <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                        <ThemedText style={styles.clearIcon}>✕</ThemedText>
                    </TouchableOpacity>
                )}
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    searchIcon: {
        fontSize: 16,
        marginRight: 10,
        opacity: 0.6,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    clearButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    clearIcon: {
        fontSize: 12,
        color: '#666',
    },
});
