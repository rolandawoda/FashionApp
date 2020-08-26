import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {Feather as Icon} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack'

import Container from '../components/Container'
import TextInput from '../components/Form/TextInput';
import Checkbox from '../components/Form/Checkbox';
import colors from '../constants/colors';
import {OnBoaringStackRoutes} from '../navigation/Onboarding';

type PasswordChangeSuccessfulScreenNavigationProps = StackNavigationProp<OnBoaringStackRoutes, 'PasswordChanged'>

interface PasswordChangeSuccessfulScreenProps {
    navigation: PasswordChangeSuccessfulScreenNavigationProps
}

const PasswordChangeSuccessfulScreen = ({navigation}: PasswordChangeSuccessfulScreenProps ) => {
    const footer = (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footerButton} activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                <Icon size={25} name="x" color={colors.greyThree} />
            </TouchableOpacity>
        </View>
    )
    return (
        <Container {...{ footer }}>
            <View style={styles.container}>
                <View style={styles.checkContainer}>
                    <View style={styles.check}>
                        <Icon size={33} name="check" color={colors.greyThree} />
                    </View>
                </View>
                <Text style={styles.welcome}>Your password was successfully changed</Text>
                <Text style={styles.info}>Close this window and login again</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity style={[styles.button, {backgroundColor: colors.greyOne}]} activeOpacity={0.8} onPress={() => navigation.replace('Login')}>
                        <Text style={[styles.buttonText, {color: 'white'}]}>
                            Login again
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        justifyContent: 'center'
    },
    welcome: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    info: {
        textAlign: "center",
        marginBottom: 20
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 30
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.greyOne,
        marginHorizontal: 5
    },
    button: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 10,
        paddingHorizontal: 50
    },
    buttonText: {
        textAlign: "center",
        marginHorizontal: 10
    },
    question: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 3
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        padding: 20
    },
    footerButton: {
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    checkContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    check: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#EEEEEE',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default PasswordChangeSuccessfulScreen;