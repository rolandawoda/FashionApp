import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CategoryProps {
    cat: {
        title: string,
        id: string,
        color: string
    }
}


const OSIZE = 60
const RSIZE = 6
const ISIZE = OSIZE - RSIZE


const Category = ({ cat }: CategoryProps) => {

    const [selected, setSelected] = useState(false)

    return (
        <TouchableOpacity key={cat.id} style={styles.circleContianer} activeOpacity={0.8} onPress={() => setSelected(prev => !prev)}>
            {selected && (
                <View style={styles.outlineContainer}>
                    <View style={[styles.outline, { borderColor: cat.color }]} />
                </View>
            )}
            <View style={[styles.circle, { backgroundColor: cat.color }]} />
            <Text style={styles.circleTitle}>{cat.title}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    circle: {
        height: ISIZE,
        width: ISIZE,
        borderRadius: ISIZE / 2,
        margin: RSIZE / 2
    },
    circleContianer: {
        justifyContent: 'center',
        marginLeft: 25,
        alignItems: "center"
    },
    circleTitle: {
        marginTop: 10,
        fontSize: 11
    },
    outlineContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center"
    },
    outline: {
        height: OSIZE,
        width: OSIZE,
        borderRadius: OSIZE / 2,
        borderWidth: 1
    }
})

export default Category;