import { ScrollView, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import CategoriesCards from './CategoriesCards'
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
  const [categories,setCategories] = useState([]);

  useEffect(() => {
sanityClient.fetch(`
      *[_type == "category"]
`).then(data => {
  setCategories(data);
})
  }, [])
  return  (
    <ScrollView horizontal
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10,
    }}

            
      
    showsHorizontalScrollIndicator={false}>
    {categories.map((categories) =>(
      <CategoriesCards 
      key={categories._id}
      imgUrl={urlFor(categories.image).width(200).url()}
      title={categories.name}/>
    ))}
          

    </ScrollView>
  )
}

export default Categories