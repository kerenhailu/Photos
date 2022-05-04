import "./App.css";
import { useEffect, useState } from "react";
import { GetAllPhotos } from "./Services/Photos/photos-service";
import Test from "./Components/TEST/test";

function App() {
  let [photos, setPhotos] = useState([]);
  let [typePhotos, setTypePhotos] = useState("category");
  const [count, setCount] = useState(0);

  useEffect(() => {
    GetAllPhotos().then((res) => {
      setPhotos(res.hits);
    });
  }, []);
  // console.log(photos);
  const SortByViews = () => {
    photos.sort((a, b) => a.views - b.views);
    setPhotos([...photos]);
  };
  const SortBydownloads = () => {
    photos.sort((a, b) => a.downloads - b.downloads);
    setPhotos([...photos]);
  };
  const ButtonNext = () => {
    setCount(count + 1);
    console.log(count);
  };
  const ButtonPrev = () => {
    setCount(count - 1);
    console.log(count);
  };
  const ValueInput = (event) => {
    typePhotos = event.target.value;
  };
  // console.log(typePhotos);
  let i =0;
    const Prev=()=>{
    if(i <= 0) i = photos.length;	
    i--;
    setPhotos(photos)
    return SetImg();	
}

function Next(){
    if(i >= photos.length-1) i = -1;
    i++;
    setPhotos(photos)
    // return SetImg();			 
}
function SetImg(){
  // Photos.style
   console.log(photos[i]);
    
}
  return (
    <div className="App">
      <div className="button">
        <button onClick={Prev}>Prev</button>
        <button onClick={SortByViews}>Sort by view</button>
        <br />
        <select id="type" name="type" onChange={ValueInput}>
          <option value="category">Category</option>
          <option value="illustration" name="type" type="text">
            illustration
          </option>
          <option value="vector/svg" name="type" type="text">
            vector/svg
          </option>
          <option value="photo" name="type" type="text">
            photo
          </option>
        </select>
        <input
          className="btnCategoty"
          type="submit"
          onClick={() => setTypePhotos(typePhotos)}
        />
        <button onClick={SortBydownloads}>Sort by downloads</button>
        <button onClick={Next}>Next</button>
      </div>
      {typePhotos === "category"
        ? photos.map((pic, index) => (
            <div className="photos" key={index}>
              <img className="Photos" src={pic.largeImageURL} alt="picURL" />
            </div>
          ))
        : photos
            .filter((pic) => pic.type === typePhotos)
            .map((pic, index) => (
              <div className="Photos" key={index}>
                <img src={pic.largeImageURL} alt="picURL" />
              </div>
            ))}
      <Test />
    </div>
  );
}

export default App;
