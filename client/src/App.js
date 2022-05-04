import "./App.css";
import { useEffect, useState } from "react";
import { GetAllPhotos } from "./Services/Photos/photos-service";

// import store from './Redux/Store';
function App() {
  let [photos, setPhotos] = useState([]);
  let [typePhotos, setTypePhotos] = useState("category");
  const [count, setCount] = useState(0);
  const lengthPhotos = 9;

  useEffect(() => {
    GetAllPhotos().then((res) => {
      setPhotos(res.hits);
    });
  }, []);
  console.log(photos);
  const sortByViews = () => {
    photos.sort((a, b) => a.views - b.views);
    setPhotos([...photos]);
  };
  const sortBydownloads = () => {
    photos.sort((a, b) => a.downloads - b.downloads);
    setPhotos([...photos]);
  };
  const buttonNext = () => {
    setCount(count + 1);
    console.log(count);
  };
  const buttonPrev = () => {
    setCount(count - 1);
    console.log(count);
  };
  const valueInput = (event) => {
    typePhotos = event.target.value;
  };
  console.log(typePhotos);

  return (
    <div className="App">
      <div className="button">
        <button onClick={buttonPrev}>Prev</button>
        <button onClick={sortByViews}>sort by view</button>
        <br />
        <select id="type" name="type" onChange={valueInput}>
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
        <input className="btnCategoty" type="submit" onClick={() => setTypePhotos(typePhotos)} />
        <button onClick={sortBydownloads}>sort by downloads</button>
        <button onClick={buttonNext}>Next</button>
      </div>
      {typePhotos === "category"
        ? photos.map((pic, index) => (
            <div className="photos" key={index}>
              <img className="center" src={pic.largeImageURL} alt="picURL" />
            </div>
          ))
        : photos
            .filter((pic) => pic.type === typePhotos)
            .map((pic, index) => (
              <div className="photos" key={index}>
                <img src={pic.largeImageURL} alt="picURL" />
              </div>
            ))}
    </div>
  );
}

export default App;
