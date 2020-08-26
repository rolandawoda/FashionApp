import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import colors from '../constants/colors';
import {OnBoaringStackRoutes} from '../navigation/Onboarding';

type WelcomeScreenNavigationProps = StackNavigationProp<OnBoaringStackRoutes, 'Welcome'>

interface WelcomeScreenProps {
    navigation: WelcomeScreenNavigationProps
}

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>

            </View>
            <View style={styles.bottom}>
                <View style={styles.overlay}/>
                <View style={styles.bottomContent}>
                    <Text style={{fontWeight: "bold", fontSize: 25}}>Let's get started</Text>
                    <Text style={styles.note}>
                        Login to your account below or signup for an amazing experience
                    </Text>
                    <TouchableOpacity style={[styles.button, {backgroundColor: colors.greyTwo}]} activeOpacity={0.8} onPress={() => navigation.navigate('Login')}>
                        <Text style={[styles.buttonText, {color: "white"}]}>
                            Have an account? Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: '#eee'}]} activeOpacity={0.8} onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.buttonText}>
                            Join us, its free
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.buttonText}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
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
    top: {
        flex: 1,
        backgroundColor: colors.greyOne,
        borderBottomRightRadius: 75
    },
    bottom: {
        flex: 1
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.greyOne
    },
    bottomContent: {
        flex: 1,
        borderTopLeftRadius: 75,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingHorizontal: 50,
        paddingVertical: 30
    },
    button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 10,
        paddingHorizontal: 50
    },
    buttonText: {
        textAlign: "center" 
    },
    note: {
        textAlign: 'center'
    }
})

export default WelcomeScreen;