import "./App.css";
import { useEffect, useRef, useState } from "react";
import { GetAllPhotos} from "./Services/Photos/photos-service";
import Slider from "react-slick";
import AAA from "./Components/aa";

function App() {
  let [photos, setPhotos] = useState([]);
  let [typePhotos, setTypePhotos] = useState("category");
  const [count, setCount] = useState(0);
  const[arrayPic,setArrayPic]=useState([]);
  const [left, setLeft] = useState(0);
  const [next, setNext] = useState(0);
  const [previous, setPrevious] = useState(0);
  //////////////////////////////
  const slider1 = useRef();
  const slider2 = useRef();
  const [nav2, setNav2] = useState();
const lengthPhotos=9;

const [index, setIndex] = useState(0);
  useEffect(()=>{
GetAllPhotos()
.then((res)=>{
  setPhotos(res.hits)
})
  },[])
  console.log(photos)
  // 
  // console.log(arrayPic);
const sortByViews=()=>{
  photos.sort((a, b) => a.views - b.views)
              setPhotos([...photos]);
}
const sortBydownloads=()=>{
  photos.sort((a, b) => a.downloads - b.downloads)
              setPhotos([...photos]);
}


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
console.log(typePhotos);
// const settings = {
//   className: "center",
//   centerMode: true,
//   infinite: true,
//   centerPadding: "1000px",
//   slidesToShow: 2,
//   speed: 800,
//   rows: 3,
//   slidesPerRow: 1
// };
// const handleSliderNext = () => {
//   setLeft(left + 12);
// }
// const handleSliderPrev = () => {
//   setLeft(left - 12);
// }
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };
const settings = {
  arrowClass: "my-foo-arrow",
  arrowNextClass: "my-foo-next",
  arrowPrevClass: "my-foo-prev"
};
// let NextBtn=()=> {
//   next.Slider.slickNext();
// }
// let PreviousBtn=()=>{
//   previous.slickPrev();
// }
let num=1
  return (
    <div className="App">
        <div className="button">
          <button onClick={buttonPrev}>Prev</button>
          <button onClick={sortByViews}>sort by view</button><br/>
  <select id="type" name="type" onChange={valueInput}>
    <option value="category">Category</option>
    <option value="illustration" name="type" type="text">illustration</option>
    <option value="vector/svg" name="type" type="text">vector/svg</option>
    <option value="photo" name="type" type="text" >photo</option>
  </select>
  <input type="submit" onClick={()=>setTypePhotos(typePhotos)}/>
          <button onClick={sortBydownloads}>sort by downloads</button>

          {/* <button onClick={()=>setTypePhotos(typePhotos)}>Model</button> */}
          <button onClick={buttonNext}>Next</button>
        </div>
        {/* <button disabled={left === 36} onClick={handleSliderNext} className='next-img-btn'>
            left</button>
            <button disabled={left === 0} onClick={handleSliderPrev} className='prev-img-btn'>
           right </button> */}
      {/* {photos.length=lengthPhotos} */}
      {/* <button className="button" onClick={PreviousBtn}>
            Previous
          </button>
          <button className="button" onClick={NextBtn}>
            Next
          </button> */}
          
        {typePhotos==="category"?
          photos.map((pic,index)  => 
        
          <Slider>
            <div className="photos" key={index} > 
             <img className="center" src={pic.largeImageURL} alt='picURL'/>
            </div>
             </Slider>
          ):
            photos.filter(pic => pic.type ===typePhotos).map((pic,index)  => 
              <div className="photos" key={index}>
               <img src={pic.largeImageURL} alt='picURL'/>
              </div>
            )}
          
            {/* <AAA/> */}
    </div>
  );
}

export default App;
