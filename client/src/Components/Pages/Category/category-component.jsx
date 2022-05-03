import React, { useEffect, useState } from "react";
import './category.css';
export default function Category() {
  //     let [photos, setPhotos] = useState([{}]);
  //   useEffect(()=>{
  // fetch("https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}").then((res)=>res.json())
  // .then((res)=>{
  //   setPhotos(res.hits)
  //   // console.log(photos)
  // })
  //   },[])
  //   console.log(photos);
  return (
    <div className="Category">
      <h1>Category</h1>
      <div className="CategoryPart">
       <a  href="">Sport</a>
      <a href="">Jobs</a>
      <a href="">Zoo</a>
      <a href="">Sea</a>   
      </div>
    </div>
  );
}
