import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions, Animated, PanResponder} from 'react-native';

const {width} = Dimensions.get('window')

const SCREEN_WIDTH = width;
const CARD_WIDTH = width * 0.7;
const CARD_HEIGHT = CARD_WIDTH * (425 / 294);


const SWIPE_THRESHOLD = 0.30 * width;
const SWIPE_OUT_DURATION = 250;

interface CardProps {
    value: any
    length: number,
    color: string,
    onSwipe: () => void,
    onSwipeRight?: (direction:string) => void
    onSwipeLeft?: (direction:string) => void
}

const Card = ({length, color, value, onSwipe} : CardProps) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            pan.setValue({
                x: gesture.dx,
                y: gesture.dy
            })
        },
        onPanResponderRelease: (event, gesture) => {
            if(gesture.dx > SWIPE_THRESHOLD){
                forceSwipe('right')
            }else if(gesture.dx < -SWIPE_THRESHOLD){
                forceSwipe('left')
            }else{
                resetPosition()
            }
        }
      })
    ).current;

    const resetPosition = () => {
        Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false
        }).start()
    }

    const forceSwipe = (direction: string) => {
        const finalValue = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
        Animated.timing(pan,{
            toValue: {x: finalValue, y: 0},
             duration: SWIPE_OUT_DURATION,
            useNativeDriver: false
        }).start(() => swipeComplete(direction))
    }

    const swipeComplete = (direction: string) => {
        onSwipe()
    }
  
    const translateY = value.interpolate({
        inputRange: [1 - length, 0],
        outputRange: [-45, 0]
    })
    const scale = value.interpolate({
        inputRange: [1 - length, 0],
        outputRange: [0.9, 1]
    })
     
    return (
        <View style={styles.card}>
            <Animated.View style={[styles.del, {backgroundColor: color, transform: [{translateY }, {scale}], ...pan.getLayout()}]}
                {...panResponder.panHandlers}
            />
        </View>
    )
}

Card.defaultProps = {
    onSwipeLeft: () => {},
    onSwipeRight: () => {}
}

const styles = StyleSheet.create({
    card: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center"
    },
    del: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 10
    }
})

export default Card