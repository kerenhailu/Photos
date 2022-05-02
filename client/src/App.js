import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { GetAllPhotos } from "./Services/Photos/photos-service";

function App() {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    GetAllPhotos()
      .then((data) => {
        setPhotos(data);
        console.log(photos);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(photos);
  return (
    <div className="App">
      <header className="App-header">
        {photos.map((pic, index) => (
          <div key={index}>
            <img src={pic.pageURL} alt="pic" />
            {pic.type}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
