import React, {useRef} from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import data from '../data/onboarding';
import {OnBoaringStackRoutes} from '../navigation/Onboarding'


const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width

const SLIDER_HEIGHT = ((HEIGHT * 0.65) - 100) / 2;

type OnboardingScreenNavigationProp = StackNavigationProp<OnBoaringStackRoutes,'Onboarding'>;

interface OnboardingScreenProps {
    navigation: OnboardingScreenNavigationProp
}



const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
    const footerRef = useRef<any>(null);
    const headerRef = useRef<any>(null);

    let captionScrollX: any = new Animated.Value(0)
    const backgroundColor = captionScrollX.interpolate({
        inputRange: [0, WIDTH, WIDTH * 2, WIDTH * 3],
        outputRange: ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']
    });

    const scrollHeader = (pos: any) => {
        const x = WIDTH * (pos + 1)
        if((pos + 1) >= data.length){
            navigation.navigate('Welcome')
        }else{
            if(headerRef.current){
                headerRef.current.scrollTo({x: x, animated: true})
            }
        }
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.scrollContainer, {
                backgroundColor
            }]}>
                <ScrollView
                    ref={headerRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    decelerationRate="fast"
                    bounces={false}
                    snapToInterval={WIDTH}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: captionScrollX}}}],
                        {listener: (event: any) => { 
                            if(footerRef.current){
                                footerRef.current.scrollTo({x: event.nativeEvent.contentOffset.x, animated: true})
                            }
                        }, useNativeDriver:  false }
                    )}
                >
                    {data.map((item, i) => {
                        return (
                            <View key={item.label}>
                                <View style={[
                                    styles.textContainer, {
                                        transform: [
                                            { translateY: SLIDER_HEIGHT },
                                            { translateX: item.direction === "left" ?  (-WIDTH / 2) + 50   : (WIDTH / 2  - 50)},
                                            { rotate: "-90deg" }
                                        ]
                                    }
                                ]}
                                >
                                    <Text style={styles.label}>{item.label}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>

            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={[{ ...StyleSheet.absoluteFillObject }, {backgroundColor}]} />
                <View style={styles.footerContainer}>
                    <Animated.ScrollView
                         horizontal
                         showsHorizontalScrollIndicator={false}
                         decelerationRate="fast"
                         snapToInterval={WIDTH}
                         scrollEnabled={false}
                         ref={footerRef}
                         style={{
                             
                         }}
                    >
                    {data.map((item, i) => {
                        return (
                            <View key={item.label} style={styles.footerContent}>
                                  <Text style={styles.title}>{item.title}</Text>
                                  <Text style={styles.description}>{item.description}</Text>
                                  <TouchableOpacity style={[styles.button, {backgroundColor: i <  (data.length - 1) ? "#eee" : "#BFEAF5"}]} activeOpacity={0.8} onPress={scrollHeader.bind(null, i)}>
                                        <Text style={styles.buttonText}>{i < (data.length - 1) ? "Next" : "Lets get started" }</Text>
                                  </TouchableOpacity>
                            </View>
                        )
                    })}
                    </Animated.ScrollView>
                    <View style={styles.dotsContainer}>
                        {data.map((item, i) => {
                            const currentIndex = Animated.divide(captionScrollX, WIDTH)
                            const opacity = currentIndex.interpolate({
                                inputRange: [i-1, i, i+1],
                                outputRange: [0.5, 1, 0.5],
                                extrapolate: "clamp"
                            });
                            const scale = currentIndex.interpolate({
                                inputRange: [i-1, i, i+1],
                                outputRange: [1, 1.25, 1],
                                extrapolate: "clamp"
                            });
                        return (<Animated.View style={[styles.dot, {opacity, 
                            transform: [
                                {scale}
                            ]
                        }]} key={i} />)})}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContainer: {
        height: HEIGHT * 0.65,
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1,
        borderTopLeftRadius: 75,
        backgroundColor: 'white'
    },
    label: {
        fontSize: 80,
        lineHeight: 80,
        textAlign: 'center',
        color: 'white'
    },
    textContainer: {
        width: WIDTH,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContent: {
        width: WIDTH,
        height: "100%",
        paddingHorizontal: 70,
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10
    },
    description: {
        textAlign: "center",
        marginBottom: 15
    },
    button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 10
    },
    buttonText: {
        textAlign: "center" 
    },
    dotsContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 50,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        height: 8,
        width: 8,
        backgroundColor: 'skyblue',
        borderRadius: 100,
        margin: 2
    }
})

export default OnboardingScreen;

