import React from 'react';
import {toast} from 'react-toastify';
import { FcLike,FcLikePlaceholder } from "react-icons/fc";

const Card=({course,likedCourses,setLikedCourses})=>{


function clickHandler(){
//logic
if(likedCourses.includes(course.id)){
    //toh phle se like hua pada h usko unlike krna h or likedcourses me se vo course id filter ho jayega
setLikedCourses((previousState)=> previousState.filter((item)=>(item!==course.id) ) );
toast.warning("like removed");
}

else{//phle se like nhi h
    if(likedCourses.length===0){
        setLikedCourses([course.id]);
    }
    else{
        setLikedCourses((prevState)=>[...prevState,course.id]);
    }
   
    toast.success("liked successfully");
}


    }

    return(
        <div className='w-[300px] bg-slate-800 rounded-md overflow-hidden   '>

            <div className='relative'>
                <img src={course.image.url} alt="" ></img>
           

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center '>
                    {/* we have to add the icon of heart (likes) for this import the icon package(npm i react-icons)*/}
                    <button onClick={clickHandler}>
                   {//if koi course id liked courses ke andr h toh button click krne pr unliked icon otherwise like
                    likedCourses.includes(course.id)? 
                    (<FcLike fontSize="1.75rem"/>):
                    (<FcLikePlaceholder fontSize="1.75rem"/>)
                    
                   }
                    </button>
                </div>
             </div>
                <div className='p-4'>
                  <p className='text-white font-semibold text-lg leading-6'>{course.title}</p> 
                  <p className='mt-2 text-white'>
                    {
                       course.description.length>100?
                       (course.description.substr(0,100)+"..."):(course.description)
                    }
                  </p> 
                </div>
            </div>
       
        
    )
}
export default Card;