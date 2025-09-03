import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { ThemedText } from '../ThemedText';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export function Button({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    style,
    textStyle,
}: ButtonProps) {
    const buttonStyle = [
        styles.button,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        style,
    ];

    const textStyleArray = [
        styles.text,
        styles[`${variant}Text`],
        styles[`${size}Text`],
        disabled && styles.disabledText,
        textStyle,
    ];

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
        >
            <ThemedText style={textStyleArray}>{title}</ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // 变体样式
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: '#F2F2F7',
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007AFF',
    },

    // 尺寸样式
    small: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 32,
    },
    medium: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        minHeight: 44,
    },
    large: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        minHeight: 56,
    },

    // 文本样式
    text: {
        fontWeight: '600',
    },
    primaryText: {
        color: 'white',
    },
    secondaryText: {
        color: '#000',
    },
    outlineText: {
        color: '#007AFF',
    },

    smallText: {
        fontSize: 14,
    },
    mediumText: {
        fontSize: 16,
    },
    largeText: {
        fontSize: 18,
    },

    // 禁用状态
    disabled: {
        opacity: 0.5,
    },
    disabledText: {
        opacity: 0.5,
    },
});
