import React from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

const AvatarListArray = [
    {
        id:1,
        name:"Saurabh Suman",
        work:"React Developer"
    },
    {
        id:2,
        name:"Nitin Banjara",
        work:"Java Developer"
    },
    {
        id:3,
        name:"Aniket Sikarwar",
        work:"SQL Developer"
    },
    {
        id:4,
        name:"Kushagra Anand",
        work:"Senior React Developer"
    },
    {
        id:4,
        name:"Shubham Asati",
        work:"Pyhton Developer"
    }
]

const avatarcardlist = AvatarListArray.map((a,i)=>{
    return <AvatarList key={i} id={AvatarListArray[i].id} name={AvatarListArray[i].name} work={AvatarListArray[i].work}/>
})

const Avatar = () =>{
    return (
        <div className="mainpage">
            <h1>Welcome to my page</h1>
            {avatarcardlist}
        </div>
    )
}

export default Avatar;