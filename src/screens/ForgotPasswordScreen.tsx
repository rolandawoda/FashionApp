import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {StackNavigationProp} from '@react-navigation/stack'

import Container from '../components/Container'
import TextInput from '../components/Form/TextInput';
import Checkbox from '../components/Form/Checkbox';
import colors from '../constants/colors';
import {OnBoaringStackRoutes} from '../navigation/Onboarding'

type ForgotPasswordScreenNavigationProps = StackNavigationProp<OnBoaringStackRoutes,'ForgotPassword'>

interface ForgotPasswordScreenProps {
    navigation: ForgotPasswordScreenNavigationProps
}

const ForgotPasswordScreen = ({navigation}: ForgotPasswordScreenProps) => {
    const footer = (
        <View>
            <View style={styles.iconContainer}>
                <View style={styles.icon}/>
                <View style={styles.icon}/>
                <View style={styles.icon}/>
            </View>
            <TouchableWithoutFeedback style={styles.button}>
                <View style={styles.button}>
                    <Text style={[styles.buttonText, {color:"white"}]}>
                        Don't work?
                    </Text>
                    <Text style={{color:"white"}}>
                       Try another way
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
    return (
        <Container {...{ footer }}>
            <View style={styles.container}>
                <Text style={styles.welcome}>Forgot Password?</Text>
                <Text style={styles.info}>Enter the email address associated with your account</Text>
                <Formik
                    initialValues={{ email: ''}}
                    validationSchema= {
                        yup.object().shape({
                            email: yup.string().email().required('Required')
                          })
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        navigation.replace('PasswordChanged')
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
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity style={[styles.button, {backgroundColor: colors.greyOne}]} activeOpacity={0.8} onPress={() => handleSubmit()}>
                                    <Text style={[styles.buttonText, {color: 'white'}]}>
                                        Reset password
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

export default ForgotPasswordScreen;