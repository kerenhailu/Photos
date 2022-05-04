import React, {useState, useEffect} from 'react';
import { GetAllPhotos } from '../Services/Photos/photos-service';
// import data from './data';
import People from './p';
function AAA() {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1
      if (index < 0) {
        setIndex(lastIndex)
        }
      if (index > lastIndex){
        setIndex(0)
        }
     }, [index, people])
     useEffect(()=>{
        GetAllPhotos()
        .then((res)=>{
          setPeople(res.hits)
        })
          },[])
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
     }, 5000);
      return () => clearInterval(slider)
     }, [index])
  return (
    <section className="section">
    <div className="title">
     <h2>reviews</h2>
     <div className="underline"></div>
    </div>
    <button className="prev" onClick={() => setIndex(index - 1)}>
{/* <FiChevronLeft /> */}prev
</button>
<button className="next" onClick={() => setIndex(index + 1)}>
{/* <FiChevronRight /> */}next
</button>
    <div className="section-center">
      {people.map((person, personIndex) => 
       <People key={person.id} {...person} personIndex= 
      {personIndex} index={index} />
          )}
       </div> </section>)
  }
  export default AAA;