import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';

interface CheckboxProps {
    label: string,
    checked: boolean,
    onCheck: () => void
}

const Checkbox = ({checked, onCheck, label}: CheckboxProps) => {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => onCheck()} >
            <View style={[styles.iconContainer, {backgroundColor: checked ? 'green': 'white'}]}>
                <Icon style={styles.icon} name="check" color= "white" size={10}/>
            </View>
                <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'green',
        borderWidth: StyleSheet.hairlineWidth,
        height: 15,
        width: 15,
        borderRadius: 2,
        marginRight: 10,
        padding: 2
    },
    icon: {
        
    },
    label: {
    }
})

export default Checkbox;