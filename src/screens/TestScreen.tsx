import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import data from '../data/onboarding';


const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width

const cardWidth = WIDTH * 0.8;



const OnboardingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToAlignment="start"
                    snapToInterval={cardWidth + 20}
                    scrollEventThrottle={1}
                    contentInset={{
                        top: 0,
                        left: 28,
                        bottom: 0,
                        right: 28
                    }}

                    contentContainerStyle={{
                        justifyContent: "center",
                        paddingHorizontal: 28
                    }}
                >
                    {data.map(item => {
                        return (
                            <View style={styles.textContainer} key={item.label}>
                                <Text style={styles.label}>{item.label}</Text>
                            </View>
                        )
                    })}
                </ScrollView>

            </View>
            <View style={styles.footer}>
                <View style={[{ ...StyleSheet.absoluteFillObject }, styles.overLay]}>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        backgroundColor: 'pink',
        height: HEIGHT * 0.65,
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1,
        backgroundColor: 'pink',
    },
    overLay: {
        backgroundColor: 'white',
        borderTopLeftRadius: 75,

    },
    label: {
        //   fontSize: 80,
        //   lineHeight: 80,
        color: 'white'
    },
    textContainer: {
        width: cardWidth,
        height: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    }
})

export default OnboardingScreen;

