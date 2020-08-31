import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Category from './Category';


type category = {
    title: string,
    id: string,
    color: string
}


interface CategoriesProps {
    data: category[]
}


const Categories = ({data}: CategoriesProps) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(cat => (
             <Category key={cat.id} {...{cat}}/>
        ))}
    </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default Categories;
