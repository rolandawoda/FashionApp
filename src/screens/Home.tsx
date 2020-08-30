import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, Dimensions, Animated} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'

import colors from "../constants/colors";
import Card from '../components/Card';

const {width} = Dimensions.get('window')

const CARD_WIDTH = width * 0.7;
const CARD_HEIGHT = CARD_WIDTH * (425 / 294);

const color = ["red", "green", "blue", "yellow"]
const data = [
    {index: 3},
    {index: 2},
    {index: 1},
    {index: 0}
]

const categories = [
    {
        id: "newin",
        ttle: "New In",
        color: "#FFDDDD",
    },
    {
        id: "summer",
        ttle: "Summer",
        color: "#BEECC4",
    },
    {
        id: "activeWear",
        ttle: "Active Wear",
        color: "#BFEAF5",
    },
    {
        id: "outlet",
        ttle: "Outlet",
        color: "#F1E0FF",
    },
    {
        id: "accessories",
        ttle: "Accessories",
        color: "#FFE8E9",
    }
]

const HomeScreen = () => {
    const [position, setPosition] = useState(0)
    const swipe = () => {
        setPosition(prev => prev + 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Icon name="menu" size={25} color={colors.greyThree} onPress={() => true}/>
                    <Text style={{color: colors.greyThree}}>OUTFIT IDEAS</Text>
                    <Icon name="shopping-bag" size={25} color={colors.greyThree}/>
                </View>
            </View>
            <View style={styles.body}>
                <View style={{...StyleSheet.absoluteFillObject}}>
                    <View style={styles.bgOne}>
                        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: colors.greyTwo}}/>
                        <View style={{flex: 1, backgroundColor: "white", borderBottomRightRadius: 75}}/>
                    </View>
                    <View style={styles.bgTwo}>
                        <View style={{flex: 1, backgroundColor: "white" }}/>
                        <View style={{flex: 1, backgroundColor: colors.greyThree}}/>
                        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: colors.greyTwo, borderTopLeftRadius: 75,  borderBottomRightRadius: 75}}/>
                    </View>
                    <View style={styles.bgThree}>
                        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: colors.greyTwo}}/>
                        <View style={{flex: 1, backgroundColor: colors.greyThree, borderTopLeftRadius: 75 }} />
                    </View>
                </View>
              
                    {data.map(( {index}, i) => index >= position &&
                            <Card key={i} value={new Animated.Value(position - index)} length={data.length} color={color[i]} onSwipe={swipe} />
                    )}
               
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

export default HomeScreen;