import React, { useState,useEffect } from 'react';
import DataTable from './DataTable'
import { render } from 'react-dom';

import './style.css';

function App(){
   const [data,setData]=useState([]);
   const [q,setq]=useState('');


const getMoviedata =()=>{
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7715b689&type=movie&s=bad&y=2010")
    .then(res => res.json())
    .then( res =>{
     console.log(res.Search,'app')
     setData(res.Search)
  })  
   
}
   useEffect(()=>{
     getMoviedata()
   },[])

const Search=(data)=>{
   return data.filter(data=> data.Title.toString().toLowerCase().indexOf(q)> -1)
 console.log(q)
  
}
    return (
      <div className="app">
       
      <input type="text" value={q} onChange={(e)=> setq(e.target.value)} />
         
       <DataTable data={Search(data) || data} />
      </div>
    );
  }


render(<App />, document.getElementById('root'));
