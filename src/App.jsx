import "./App.css";
//to add toast in a react app importing a package of toast (npm i react-toastify)--now this toast container we have to import in index.js file

import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const App=()=> {

  const[category,setCategory]=useState(filterData[0].title)//all category by default
//abhi jab tk data nhi aya hoga jab tk hme loading wala component dikhana hota h-
const [loading, setLoading] = useState(true);

  const [courses,setCourses]=useState([]);//apne api call krke courses me data store kara liya h 
  //now ye App component ke render hote hi we want api call
  //using useEffect

  
    async function fetchData(){
      //jb tk response le rha h loader screen dikhao
      setLoading(true);
      try{
        let response=await fetch(apiUrl);
        //convert data into json
        let output=await response.json();
        //save data into a variable
        setCourses(output.data);
      }
      catch(error){
    //using toast to display error
    toast.error("something went wrong");
      }
      
      //data ate hi laoding screen hata do
      setLoading(false);
    }

    //whenever page loads or relaods fetch data is always called
    useEffect( ()=>{
      fetchData();
    },[])
    
  


  return (
<div className="min-h-screen flex flex-col">
    <div className="">
<Navbar/>
    </div>
    <div className="w-max[100vw] h-max[100vh] bg-slate-600" >
    <div className="my-4">
<Filter
filterData={filterData}
category={category}
setCategory={setCategory}
/>
</div>
   <div className=" max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h[50vh]">
    {/* if loading then show spinner else cards*/}
{ loading?(<Spinner/>) :(<Cards courses={courses} category={category}/>)}
   </div>

    </div>

   </div> 
  );
}

export default App;
