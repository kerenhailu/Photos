import React, { useEffect, useState } from 'react'
import { GetAllPhotos } from '../../Services/Photos/photos-service';
import './test.css';
export default function Test() {
    let [photos, setPhotos] = useState([]);
    // let photos=[1,2,3,4,5]
    var slider_img = document.querySelector('.slider-img');
    useEffect(() => {
      GetAllPhotos().then((res) => {
        setPhotos(res.hits);
      });
    }, []);
    var i = 0;
    const prev=()=>{
        if(i <= 0) i = photos.length;	
        i--;
        return setImg();			 
    }
    
    function next(){
        if(i >= photos.length-1) i = -1;
        i++;
        return setImg();			 
    }
    function setImg(){
        return slider_img.setAttribute('src', "images/"+photos[i]);
        
    }
  return (
    <div className='slider'>Test

        {
            photos.map((pic, index) => (
                <div className="photos" key={index}>
                  <img className="slider_img" src={pic.largeImageURL} alt="picURL" />
                </div>
              ))
        }
<button onClick={prev}>prev</button>
<button onClick={next}>next</button>



    </div>
  )
}
