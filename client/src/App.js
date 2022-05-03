import "./App.css";
import { useEffect, useState } from "react";
import PageRouting from "./Components/Routing/PageRouting";
import Category from "./Components/Pages/Category/category-component";

function App() {
  let [photos, setPhotos] = useState([{}]);
  useEffect(()=>{
fetch("https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}").then((res)=>res.json())
.then((res)=>{
  setPhotos(res.hits)
  // console.log(photos)
})
  },[])
  console.log(photos);

const valueInput=(event)=>{
photos[event.target.name]=event.target.value;
console.log(photos);
}
  const ChangeType=(typePhotos)=>{
    console.log("ddd");
if(photos.type==typePhotos){
  setPhotos(photos)
  console.log(photos);
}
  }
  return (
    <div className="App">
      {/* <PageRouting/> */}
      {/* <Category/> */}
        <div className="button">
          <button>Prev</button>
          <label for="model">Choose a model:</label>
  <select id="type" name="type">
    <option value="all">all</option>
    <option value="illustration" onChange={(e)=>valueInput(e.target.value)}>illustration</option>
    <option value="vector/svg" onChange={(e)=>valueInput(e.target.value)}>vector/svg</option>
    <option value="photo" onChange={(e)=>valueInput(e.target.value)}>photo</option>
  </select>
          <button onClick={()=>ChangeType("photo")}>Model</button>
          <button>Next</button>
        </div>

{
  photos.map((pic,index)  => 
    <div className="photos" key={index}>
     <img src={pic.largeImageURL} alt='picURL'/>
       
    </div>
  )}
     {/* <img src={photos.largeImageURL} alt='picURL'/> */}
        
        {/* {photos.map((pic, index) => (
          <div key={index}>
            <img src={pic.largeImageURL} alt="pic" />
            {pic.type}
          </div>
        ))} */}
    
    </div>
  );
}

export default App;
