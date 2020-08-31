import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import colors from '../../constants/colors';
import {MainNavigatorRoutes} from '../Main';

export type itemType = {
    label: string,
    screen: keyof  MainNavigatorRoutes,
    icon: string,
    color: string

}

interface DrawerItemProps {
    item: itemType
}

const DrawerItem = ({item: {label, screen, color}}: DrawerItemProps) => {
    const {navigate} = useNavigation<DrawerNavigationProp<MainNavigatorRoutes, "FavouriteOutfits">>()
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigate(screen)}>
            <View style={[styles.icon, {backgroundColor: color}]} />

            <Text>{label}</Text>
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