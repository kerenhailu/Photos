import "./App.css";
import { useEffect, useState } from "react";
import { GetAllPhotos, PutPhotos } from "./Services/Photos/photos-service";

function App() {
  let [photos, setPhotos] = useState([]);
  let [updatephotos, setUpdatePhotos] = useState([{}]);

  useEffect(()=>{
GetAllPhotos()
.then((res)=>{
  setPhotos(res.hits)
  // console.log(photos)
})
  },[])
  photos.length=9;
  const buttonNext=()=>{
    console.log("next");
      } 
       const buttonPrev=()=>{
        console.log("Prev");
          }
const valueInput=(event)=>{
  updatephotos[event.target.name]=event.target.value;
console.log(photos);
}
// const updateUser = (requestedGrade, newGrade) => {
//   setUserToUpdate({ ...userToUpdate });
//   console.log({ requestedGrade, newGrade });
//   PutGrade({ requestedGrade, newGrade })
//     .then((res) => res.json())
//     .then((data) => setUsersData(data))
//     .catch((err) => console.log(err))
//     .finally(() => setLoading(false));
// };
  const ChangeType=(requestedPhotos, newPhotos)=>{
    setUpdatePhotos({...updatephotos})
    console.log({ requestedPhotos, newPhotos });
    PutPhotos({ requestedPhotos, newPhotos })
    .then((res) => res.json())
        .then((data) => setUpdatePhotos(data))
        .catch((err) => console.log(err))
  }
  return (
    <div className="App">
        <div className="button">
          <button onClick={buttonPrev}>Prev</button>
          <label for="model">Choose a model:</label>
  <select id="type" name="type">
    <option value="all">all</option>
    <option value="illustration" name="type" onChange={valueInput}>illustration</option>
    <option value="vector/svg" name="type" onChange={valueInput}>vector/svg</option>
    <option value="photo" name="type" onChange={valueInput}>photo</option>
  </select>
          <button onClick={() => ChangeType(photos, updatephotos)}>Model</button>
          <button onClick={buttonNext}>Next</button>
        </div>
{
  photos.map((pic,index)  => 
    <div className="photos" key={index}>
     <img src={pic.largeImageURL} alt='picURL'/>
       
    </div>
  )}
    </div>
  );
}

export default App;
