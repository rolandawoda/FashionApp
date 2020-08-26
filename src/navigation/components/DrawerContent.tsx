import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import {Feather as Icon} from '@expo/vector-icons'

import DrawerItem, {itemType} from './DrawerItem';
import colors from '../../constants/colors';

const {width} = Dimensions.get('window')
const DRAWER_WIDTH = width * 0.7


const navItems: itemType[] = [
    {
        label: "Outfit Ideas"
    },
    {
        label: "Favourite Outfits"
    },
    {
        label: "Edit Profile"
    },
    {
        label: "Transaction History"
    },
    {
        label: "Notifications Settings"
    },
    {
        label: "Logout"
    }
]

const DrawerContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Icon name="x" size={25} color={"white"}/>
                    <Text style={{color: "white"}}>My Profile</Text>
                    <Icon name="shopping-cart" size={25} color={"white"}/>

                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.circle}/>
                <View style={styles.bodyHeader}>
                    <Text style={styles.name}>Awoda Roland</Text>
                    <Text style={styles.email}>rolandawoda@gmail.com</Text>
                </View>
                <View style={styles.navLinks}>
                    {navItems.map((item, i) => {
                        return (
                            <DrawerItem key={i}  item={item}/>
                        )
                    })}
                </View>

            </View>
            <View style={styles.footer}>
                <View style={styles.footerContent}>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.greyThree
    },
    header: {
        flex: 0.2,
        backgroundColor: 'white',
    },
    headerContent: {
        flex: 1,
        backgroundColor: colors.greyThree,
        borderBottomRightRadius: 75,
        flexDirection: 'row',
        paddingTop: 40,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    body: {
        flex: 0.8,
        backgroundColor: 'white',
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75,
        padding: 50,
    },
    navLinks: {
        flex: 1,
    },
    footer: {
        flex: 0.2,
        backgroundColor: 'white',
    },
    footerContent: {
        flex: 1,
        backgroundColor: colors.greyThree,
        borderTopLeftRadius: 75
    },
    name: {
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 4,
        fontSize: 20
    },
    email: {
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)'
    },
    bodyHeader: {
        marginVertical: 25
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: colors.greyOne,
        top: -50,
        left: (DRAWER_WIDTH - 100)/2

    }
})

export default DrawerContent;