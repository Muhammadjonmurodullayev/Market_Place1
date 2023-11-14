import {useState} from "react"
import Products from "./Products/Products"
import Navigator from "./components/Navigator/Nav"
import Recommended from "./components/Recommended/Recommended"
import Sidebar from "./components/Sidebar/Sidebar"
import products from "./db/data"
// import Category from "./components/Sidebar/Category/Category"
import Card from "./components/Card"
import "./index.css"

function App (){
    const [selectedCategory,setselectedCategory]=useState(null);
const [query,setQuery]=useState("");
const handlelnputChange=(event)=>{setQuery(event.target.value)};

const filteredltems=products.filter((product)=>
product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1
);
    
const handlechange =(event)=>{
    setselectedCategory(event.target.value)
};

const handleCilick =(event)=>{
    setselectedCategory(event.target.value)
};

function filtereData(products,selected,query){
    let filteredProducts=products

if(query){
    filteredProducts=filteredltems
}
if(selected){
filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title})=>
category===selected||
color===selected||
company===selected||
newPrice==selected||
title===selected)
}
return filteredProducts.map(({img,title,star,newPrice,reviews,prevPrice})=>(
    <Card 
    key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice}
    />
))
}

 const result= filtereData(products,selectedCategory,query)

    return <>
    <Sidebar handlechange={handlechange}/>
    <Navigator query={query} handlelnputChange={handlelnputChange}/>
    <Recommended handleCilick={handleCilick}/>
    <Products result={result}/>
    </>
}
export default App;