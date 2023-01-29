import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['OnePunch'])

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories,])
    }

  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory onNewValue={ onAddCategory } />
        { categories.map( (category) => <GifGrid key={category} category={category}/>)}
    </>
  )
}
