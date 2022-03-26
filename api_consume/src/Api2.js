import React,{ useState, useEffect }  from 'react';
import axios from 'axios';
import ReactTable from "react-table";  
function Api() {
  const [data, setData] = useState([]);
 
  useEffect(async () => {
    try{
    const res=await axios("https://api.tvmaze.com/search/shows?q=girls");
        setData(res.data);
        console.log(res.data)
    }catch (err) {
      // Handle Error Here
      console.log(err);
  }
  },[]);
  return (
    
    <div>
        {
      data.map((data,index)=>{
         return <div key={index} style={{display:'flex'}}>
         <span className='m-3'>{data.score}</span>
         <a href={data.show.url} className='m-3' >{data.show.url}</a>
         <span className='m-3'>{data.show.summary}</span>
         {/* <img src={data.show.image.medium}  width='100' height='100'/>  */}
         </div>
      })
    }
    <iframe width="960" height="615" src="https://www.youtube.com/embed/8FAUEv_E_xQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>

  );
}

export default Api;





