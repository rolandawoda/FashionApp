import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import colors from '../constants/colors'

interface OutfitCardProps {
    outfit: {
        color: string,
        id: number,
        aspectRatio: number,
        selected: boolean
    },
    width: number,
    onPress?: () => void,
    selected: boolean
}




const OutfitCard = ({ outfit, width, selected }: OutfitCardProps) => {
    const [isSelected, setSelected] = useState(false)

    const onPress = () => {
        setSelected(prev => !prev);
        outfit.selected = !outfit.selected
    }

   const  {aspectRatio, color} = outfit;
    return (
        <TouchableOpacity style={[styles.card,{backgroundColor: color, width, height: width * aspectRatio}]} {...{onPress}}>
            {isSelected && (
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <Icon size={12} name="check" color="white"/>
                    </View>
                </View>
            )}
        </TouchableOpacity>
    )

}

OutfitCard.defaultProps = {
    selected: false
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginBottom: 20
    },
    iconContainer: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: 10
    },
    icon: {
        width: 20,
        height: 20,
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green"
    }
})

export default OutfitCard;