import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';

function Header(){

    const [getdata, setdata]=useState([]);

   function getApi(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json =>{
        setdata(json);
        //console.log(getdata)
    })
   }

   useEffect(()=>{
    console.log(getdata)

    //getApi();
   
   },[getdata])
 

    return(<>

    <Button className="btn btn-info">Save</Button>

    <h1>Header</h1>
    </>)
}

export default Header;