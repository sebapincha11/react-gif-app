
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Batman']);

    const onAddCategory = (newCategory) =>{
      
      if(categories.includes(newCategory)) return;
      
      setCategories([newCategory, ...categories ]);
    }
    
    const onDeleteCategory = () => {
      categories.shift();
      
      setCategories([...categories]);
      console.log(categories);
    }

  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategory 
      
        onNewCategory = {event => onAddCategory(event)}
        onDeleteCategory = {event => onDeleteCategory(event)}
      />
      <button 
        onClick={onDeleteCategory}>X
      </button>
    {
      categories.map( category => (
        <GifGrid 
          key = {category} 
          category ={category}
        />
        ))
    }
    </>
  )
}
