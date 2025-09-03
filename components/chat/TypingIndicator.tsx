import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';

export function TypingIndicator() {
    const [dots] = useState(() => [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
    ]);

    useEffect(() => {
        const animations = dots.map((dot, index) =>
            Animated.loop(
                Animated.sequence([
                    Animated.timing(dot, {
                        toValue: 1,
                        duration: 600,
                        delay: index * 200,
                        useNativeDriver: false,
                    }),
                    Animated.timing(dot, {
                        toValue: 0,
                        duration: 600,
                        useNativeDriver: false,
                    }),
                ])
            )
        );

        animations.forEach(animation => animation.start());

        return () => {
            animations.forEach(animation => animation.stop());
        };
    }, [dots]);

    return (
        <View style={styles.container}>
            <View style={styles.bubble}>
                <View style={styles.avatar}>
                    <ThemedText style={styles.avatarText}>🤖</ThemedText>
                </View>

                <View style={styles.typingContainer}>
                    <View style={styles.typingBubble}>
                        {dots.map((dot, index) => (
                            <Animated.View
                                key={index}
                                style={[
                                    styles.dot,
                                    {
                                        opacity: dot,
                                    },
                                ]}
                            />
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
    },
    bubble: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    avatarText: {
        fontSize: 16,
    },
    typingContainer: {
        marginLeft: 8,
    },
    typingBubble: {
        flexDirection: 'row',
        backgroundColor: '#F2F2F7',
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomLeftRadius: 4,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#8E8E93',
        marginHorizontal: 2,
    },
});
