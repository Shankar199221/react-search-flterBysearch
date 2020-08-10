import React from 'react'; 

const DataTable=({ data })=>{
  
  //  const keys =data[0] && Object.keys(data[0])
  //  const columns = data[0] && Object.keys(data[0])


  return(<div>
    <h1>DataTable</h1>
    <hr/>
      {data && data.map((data)=>{
        return <div key={data.imdbID}>
          <h2>{data.Title}</h2>
        </div>
      })}
    </div>
  )
}
export default DataTable