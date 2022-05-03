import "./App.css";
import { useEffect, useState } from "react";
import { GetAllPhotos, PutPhotos } from "./Services/Photos/photos-service";

function App() {
  let [photos, setPhotos] = useState([]);
  let [typePhotos, setTypePhotos] = useState("type");
  const [select, setSelect] = useState();

  useEffect(()=>{
GetAllPhotos()
.then((res)=>{
  setPhotos(res.hits)
  // console.log(photos)
})
  },[])
  console.log(photos)

  const buttonNext=()=>{
    console.log("next");
      } 
       const buttonPrev=()=>{
        console.log("Prev");
          }
const valueInput=(event)=>{
  typePhotos=event.target.value;
console.log(typePhotos);
}

console.log(typePhotos);

  return (
    <div className="App">
        <div className="button">
          <button onClick={buttonPrev}>Prev</button>
          <label for="model">Choose a model:</label>
          {/* value="illustration" */}
  <select id="type" name="type" onChange={valueInput}>
    <option value="type">type</option>
    <option value={"illustration"} name="type" type="text">illustration</option>
    <option value="vector/svg" name="type" type="text">vector/svg</option>
    <option value="photo" name="type" type="text" >photo</option>
  </select>
  <input type="submit" onClick={()=>setTypePhotos(typePhotos)}/>
          {/* <button onClick={()=>setTypePhotos(typePhotos)}>Model</button> */}
          <button onClick={buttonNext}>Next</button>
        </div>
        {typePhotos==="type"?
          photos.map((pic,index)  => 
            <div className="photos" key={index}>
             <img src={pic.largeImageURL} alt='picURL'/>
            </div>
          ):
            photos.filter(pic => pic.type ===typePhotos).map((pic,index)  => 
              <div className="photos" key={index}>
               <img src={pic.largeImageURL} alt='picURL'/>
              </div>
            )}

    </div>
  );
}

export default App;
