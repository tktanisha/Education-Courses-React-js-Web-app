import React from "react";

const Filter=(props)=>{
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

    function filterHandler(title){
        setCategory(title);  
    }
return(

    <div className="w-11/12 flex flex-wrap max-w-max justify-center mx-auto space-x-4 ">
{/* now use map function so that we dont have to create five button */}

{filterData.map( (data)=>{
    //jab bhi map function use kro uske sath key pass krni hoti h 
   return(
   <button
   className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 ${category===data.title ? "bg-opacity-60 border-white": "bg-opacity-40 border-transparent"} transition-all duration-300'
${category===data.title?
"bg-opacity-60 border-white":
"bg-opacity-40 border-transparent"
}`}

  
   onClick={()=>{filterHandler(data.title)}}
 key={data.id}>
    {data.title}
</button>
) 
})}
    </div>
);
}

export default Filter;