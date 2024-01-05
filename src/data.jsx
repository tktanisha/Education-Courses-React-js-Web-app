import './data.css';

export const filterData=[
{
id:"1",
title: "All"
},

{
    id:"2",
    title: "Development"
},

{
    id:"3",
    title: "Business"
},

{
    id:"4",
    title: "Design",
}
];

//now exporting the api where all the data of cards is present -
export const apiUrl="https://codehelp-apis.vercel.app/api/get-top-courses";

/* example--
"data": {
    "Development": [
      {
        "id": "WD101",
        "title": "Web Development Fundamentals",
        "description": "This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.",
        "image": {
          "url": "https://codehelp-apis.vercel.app/get-top-courses/Development/Web%20Development%20Fundamentals.png",
          "alt": "Web Development Fundamentals"
        }
      },
*/ 
