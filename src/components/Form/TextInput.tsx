import React from 'react';
import { TextInput as Input, View, StyleSheet, TextInputProps as InputProps } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'


interface TextInputProps extends InputProps {
    icon: string,
    touched: boolean | undefined,
    error: string | undefined
}


const TextInput = ({ icon, error, touched, ...rest }: TextInputProps) => {
    const genericColor = !touched ? '#ccc' :  error ? 'red' : 'green'
    return (
        <View style={[styles.container, { borderColor: genericColor }]}>
            <View style={[styles.leftIcon]}>
                <Icon name={icon} size={20} color={genericColor} />
            </View>
            <Input
                style={{
                    flex: 1,
                    color: '#000'
                }}
                placeholderTextColor={genericColor}
                {...rest}
            />
            {touched && <View style={[styles.rightIcon, { backgroundColor: genericColor }]}>
                <Icon name={error ? 'x' : 'check'} size={13} color="white" />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc',
        borderRadius: 3,
        padding: 10
    },
    leftIcon: {
        marginRight: 10
    },
    rightIcon: {
        borderRadius: 30,
        padding: 2
    }
})

export default TextInput;