import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp } from '@react-navigation/native';

import Container from '../components/Container'
import TextInput from '../components/Form/TextInput';
import Checkbox from '../components/Form/Checkbox';
import colors from '../constants/colors';
import {OnBoaringStackRoutes} from '../navigation/Onboarding';
import {RootRoutes} from '../navigation/index';

type LoginScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<OnBoaringStackRoutes, 'Login'>,
  StackNavigationProp<RootRoutes>
>

interface LoginScreenProps {
    navigation: LoginScreenNavigationProps
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
    const footer = (
        <View>
            <View style={styles.iconContainer}>
                <View style={styles.icon}/>
                <View style={styles.icon}/>
                <View style={styles.icon}/>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate("Signup")}>
                <View style={styles.button}>
                    <Text style={[styles.buttonText, {color:"white"}]}>
                        Don't have an account?
                    </Text>
                    <Text style={{color:"white"}}>
                        Sign Up here
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
    return (
        <Container {...{ footer }}>
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome Back</Text>
                <Text style={styles.info}>Use your credentials below and login to your account</Text>
                <Formik
                    initialValues={{ email: '', password: '' , rememberMe: false}}
                    validationSchema= {
                        yup.object().shape({
                            email: yup.string().email().required('Required'),
                            password: yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required'),
                            rememberMe: yup.boolean()
                          })
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        navigation.navigate("Home")
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue
                    }) => (
                        <View>
                            <View style={{marginBottom: 20}}>
                                <TextInput
                                    icon="mail"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    error={errors.email}
                                    touched={touched.email}
                                    value={values.email}
                                    placeholder="Enter Your Mail"
                                />
                            </View>
                            <TextInput
                                icon="lock"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                error={errors.password}
                                touched={touched.password}
                                value={values.password}
                                secureTextEntry
                                placeholder="Enter Your Password"
                            />
                            <View style={styles.question}>
                                <Checkbox 
                                    checked={values.rememberMe}
                                    label="Remember me"
                                    onCheck={() => setFieldValue('rememberMe', !values.rememberMe)}
                                />
                                <TouchableOpacity style={[styles.button,{marginTop: 0, paddingHorizontal: 0}]} activeOpacity={1} onPress={() => navigation.navigate('ForgotPassword')}>
                                    <Text style={[styles.buttonText, {marginHorizontal: 0}]}>
                                      Forgot Password
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity style={[styles.button, {backgroundColor: colors.greyOne}]} activeOpacity={0.8} onPress={() => handleSubmit()}>
                                    <Text style={[styles.buttonText, {color: 'white'}]}>
                                        Log into your account
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        )}
                </Formik>
               
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
    }
})

export default LoginScreen;