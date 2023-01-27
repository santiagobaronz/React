import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

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
