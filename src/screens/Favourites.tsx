import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import colors from "../constants/colors";
import {RootRoutes} from '../navigation/index';
import {MainNavigatorRoutes} from '../navigation/Main';

type FavouritesScreenPropsNavigationProps = CompositeNavigationProp<
DrawerNavigationProp<MainNavigatorRoutes, 'FavouriteOutfits'>,
  StackNavigationProp<RootRoutes>
>

interface FavouritesScreenProps {
    navigation: FavouritesScreenPropsNavigationProps
}

const FavouritesScreen = ({navigation}:FavouritesScreenProps ) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Icon name="menu" size={25} color={colors.greyThree} onPress={() => navigation.openDrawer()}/>
                    <Text style={{color: colors.greyThree}}>FAVOURITE OUTFITS</Text>
                    <Icon name="edit" size={25} color={colors.greyThree} onPress={() => true}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        paddingTop: 50,
    },
    headerContent: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    body: {
        flex: 1,
    },
    bgOne: {
        flex: 1,
    },
    bgTwo: {
        flex: 1,
    },
    bgThree: {
        flex: 1
    }
})

export default FavouritesScreen;