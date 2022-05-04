import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { GetAllPhotos } from '../Services/Photos/photos-service';
// import people from './data';

const People = ({id, image, name, title, quote, personIndex, index}) => {
  const [people, setPeople] = useState([]);
  let position = "nextSlide";
 if(personIndex === index){
    position = 'activeSlide'
   }
 if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
    position = 'lastSlide'
   }
 ;

   useEffect(()=>{
    GetAllPhotos()
    .then((res)=>{
      setPeople(res.hits)
    })
      },[])
  return(
   <article className={position} key={id}>
       <h1>sfbs</h1>
     <img src={people.largeImageURL} alt={name} className="person-img" />
     <h4>{people.largeImageURL}</h4>
     <p className="title">{title}</p>
     <p className="text">{quote}</p>
     <FaQuoteRight className="icon" />
   </article>
        );
    }

    export default People;