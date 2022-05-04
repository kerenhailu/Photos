import "./App.css";
import { useEffect, useState } from "react";
import { GetAllPhotos} from "./Services/Photos/photos-service";
import Slider from "react-slick";
function App() {
  let [photos, setPhotos] = useState([]);
  let [typePhotos, setTypePhotos] = useState("type");
  const [count, setCount] = useState(0);
  const[arrayPic,setArrayPic]=useState([]);
  const [left, setLeft] = useState(0);
const lengthPhotos=9;
  useEffect(()=>{
GetAllPhotos()
.then((res)=>{
  setPhotos(res.hits)
})
  },[])
  console.log(photos)
  // 
  // console.log(arrayPic);

  const buttonNext=()=>{
    setCount(count+1)
    console.log(count);
    
      } 
       const buttonPrev=()=>{
        setCount(count-1)
    console.log(count);
          }
const valueInput=(event)=>{
  typePhotos=event.target.value;
}
// console.log(typePhotos);
// const settings = {
//   className: "center",
//   centerMode: true,
//   infinite: true,
//   centerPadding: "1000px",
//   slidesToShow: 1,
//   speed: 800,
//   rows: 3,
//   slidesPerRow: 1
// };
const handleSliderNext = () => {
  setLeft(left + 12);
}
const handleSliderPrev = () => {
  setLeft(left - 12);
}
  return (
    <div className="App">
        <div className="button">
          <button onClick={buttonPrev}>Prev</button>
          <label for="model">Choose Type:</label>
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
        <button disabled={left === 36} onClick={handleSliderNext} className='next-img-btn'>
            left</button>
            <button disabled={left === 0} onClick={handleSliderPrev} className='prev-img-btn'>
           right </button>
      {photos.length=lengthPhotos}
        {typePhotos==="type"?
          photos.map((pic,index)  => 
        
            //  <Slider {...settings}>
            <div className="photos" key={index} > 
             <img className="center" src={pic.largeImageURL} alt='picURL'/>
            </div>
            // </Slider>
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
