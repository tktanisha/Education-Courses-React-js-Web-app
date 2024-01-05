import React, { useState } from 'react';
import Card from "./Card";

const Cards=({courses,category})=>{

    const[likedCourses,setLikedCourses]=useState([]);

// let allCourses=[];//is array me sare cards daldenge
    //abhi sare cards alg alg boxes me pde h like business(ek key h iski value me 5 cards h) ke cards business wale me design ka isme hume sara data ek sath chiye
   
    //returns all the list of all courses received from the api response
   
    function getCourses(){
   if(category==="All"){
    let allCourses=[];
   
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
            allCourses.push(course);
            })
           })
      return allCourses;
     }
     else{
        return courses[category];
       }  
   }
 

    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                  getCourses().map((course)=>{
                    //sare data ko map krke hr course ko card bana diya
                  return(
                     <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                  )
                          })
            }
    
        </div>
    );
}

export default Cards;