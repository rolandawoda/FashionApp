import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';

export type itemType = {
    label: string

}

interface DrawerItemProps {
    item: itemType
}

const DrawerItem = ({item}: DrawerItemProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.icon} />

            <Text>{item.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: colors.greyTwo,
        marginRight: 25
    }
})

export default DrawerItem;