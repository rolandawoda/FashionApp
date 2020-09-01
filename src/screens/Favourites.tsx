import React, {useState, useRef} from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {Transition, Transitioning, TransitioningView} from 'react-native-reanimated';

import colors from "../constants/colors";
import { RootRoutes } from '../navigation/index';
import { MainNavigatorRoutes } from '../navigation/Main';
import OutfitCard from '../components/Outfit';

type FavouritesScreenPropsNavigationProps = CompositeNavigationProp<
    DrawerNavigationProp<MainNavigatorRoutes, 'FavouriteOutfits'>,
    StackNavigationProp<RootRoutes>
>

interface FavouritesScreenProps {
    navigation: FavouritesScreenPropsNavigationProps
}


const defaultOutfits = [
    {
        id: 1,
        color: "#BFEAF5",
        aspectRatio: 1,
        selected: false
    },
    {
        id: 2,
        color: "#BEECC4",
        aspectRatio: 200 / 145,
        selected: false
    },
    {
        id: 3,
        color: "#FFE4D9",
        aspectRatio: 180 / 145,
        selected: false
    },
    {
        id: 4,
        color: "#FFDDDD",
        aspectRatio: 180 / 145,
        selected: false
    },
    {
        id: 5,
        color: "#BFEAF5",
        aspectRatio: 1,
        selected: false
    },
    {
        id: 6,
        color: "#F3F0EF",
        aspectRatio: 120 / 145,
        selected: false
    },
    {
        id: 7,
        color: "#D5C3BB",
        aspectRatio: 210 / 145,
        selected: false
    },
    {
        id: 8,
        color: "#D5C3BB",
        aspectRatio: 160 / 145,
        selected: false
    }
]

const {width} = Dimensions.get("window")
const CWIDTH = (width - (20 * 3)) / 2

const FavouritesScreen = ({ navigation }: FavouritesScreenProps) => {
    const [selectedOutfits, setSelectedOutfits] = useState(defaultOutfits)
    const [footerHeight, setFooterHeight] = useState(0)
    const list = useRef<TransitioningView>(null);
    const transition = (
        <Transition.Together>
            <Transition.Change interpolation="easeInOut" durationMs={1000} />
        </Transition.Together>
    )

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Icon name="arrow-left" size={25} color={colors.greyThree} onPress={() => navigation.navigate('OutfitIdeas')} />
                    <Text style={{ color: colors.greyThree }}>FAVOURITE OUTFITS</Text>
                    <Icon name="edit" size={25} color={colors.greyThree} onPress={() => true} />
                </View>
            </View>
            <View style={{flex: 1, paddingTop: 10}}>
                <ScrollView contentContainerStyle={{paddingBottom: footerHeight }}>
                    <Transitioning.View {...{transition}} ref={list}>
                        <View style={{flexDirection: "row", paddingHorizontal: 20}}>
                            <View>
                                {
                                    selectedOutfits.filter(outfit => outfit.id % 2 !== 0).map(outfit => {
                                        return (
                                            <OutfitCard key={outfit.id} width={CWIDTH} {...{outfit}} onPress={() => true}/>
                                        )
                                    })
                                }

                            </View>
                            <View style={{marginLeft: 20}}>
                            {
                                    selectedOutfits.filter(outfit => outfit.id % 2 === 0).map(outfit => {
                                        return (
                                            <OutfitCard key={outfit.id} width={CWIDTH} {...{outfit}} onPress={() => true}/>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </Transitioning.View>
                </ScrollView>
                <View style={styles.footer} onLayout={({nativeEvent: { layout: {x, y, width, height}}}) => setFooterHeight(height)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: colors.greyOne }]} activeOpacity={0.8} onPress={() => {
                            list.current?.animateNextTransition()
                            setSelectedOutfits(selectedOutfits.filter(outfit => !outfit.selected))
                            }}
                        >
                            <Text style={[styles.buttonText, { color: 'white' }]}>
                                Add to Favorites
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    footer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 75,
        backgroundColor:  colors.greyThree,
        paddingVertical: 35
    },
    buttonText: {
        textAlign: "center",
        marginHorizontal: 10
    }
})

export default FavouritesScreen;