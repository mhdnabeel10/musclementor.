import React from 'react'
import './Exercises.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




 const Exercises = () => {
  const navigate = useNavigate()
 const [categories, setCategories] = useState([])
 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("https://wger.de/api/v2/exercisecategory/?api_key=0a11f2649ed585f4d0bd9fb2f530201ce918a1f0");
      setCategories(response.data.results);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  fetchData();
}, []);

  return (
    <div>
      <section id='exercise'>
        <h1 className='heading'>Exercise Categories</h1>
        <div className='categaries'>
          {
            categories.map((obj)=>{
              console.log(obj);
              return <h1 className='items' onClick={()=>navigate(`/${obj.name.toLowerCase()}`)}>{obj.name}</h1>
            })
          }
        
        </div>
      </section>
    </div>
  )
}


export default Exercises;  