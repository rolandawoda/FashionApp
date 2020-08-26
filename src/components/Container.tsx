import React, {ReactNode} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import colors from '../constants/colors';

interface ContainerProps {
    children: ReactNode,
    footer: ReactNode
}

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
const imageAspectRatio = 750 / 1125
const imageHeight = WIDTH * imageAspectRatio;

const Container = ({children, footer}: ContainerProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            <View style={styles.body}>
                <View style={styles.bodyUnderlay}/>
                <View style={styles.bodyContent}>
                    {children}
                </View>
            </View>
            <View style={styles.footer}>
                {footer}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 120,
        backgroundColor: colors.greyOne,
        borderBottomLeftRadius: 75,
    },
    body: {
        flex: 1,
        backgroundColor: colors.greyThree,
    },
    bodyUnderlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.greyOne,
        height: 100
    },
    bodyContent: {
        flex: 1,
        borderRadius: 75,
        borderTopLeftRadius: 0,
        backgroundColor: "white"
    },
    footer: {   
        backgroundColor: colors.greyThree,
        paddingBottom: 10
    }
})

export default Container;