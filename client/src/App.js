import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { GetAllPhotos } from "./Services/Photos/photos-service";

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
  return (
    <div className="App">
        <div className="button">
          <button>Prev</button>
          <button>Model</button>
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
