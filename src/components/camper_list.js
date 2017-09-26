import React from 'react';
//child
import CamperListItem from './camper_list_items';
//camperlist is nested inside the app component so it is a child
const CamperList = ({ campers, number }) => {//props is empty
    // is equal to props.campers
    
    const Items = campers.map((camper,index) => {
        return <CamperListItem key={index} camper={camper} number={index+1}/>//pass in a key to remove key warning
    //key camper and number are props or properties for long form and so we can access that with props.camper
    //prop.number refers to <td>#</td> in the cmaper_list_items page 
    //and prop.camper refers to the object outputed by console.log(campers) and is one of the data number profiles
    //and then display the campers.data[???].username and campers.data[].recent
    //and campers.data[].alltime
    //number={index+1}because the table must start with 1 not 0
});
    return (
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Last 30 Days</th>
                    <th>All Time Points</th>
                </tr>
            </thead>
            <tbody>
                {Items}
            </tbody>
        </table>
    );
}
export default CamperList;
//nest a camper list item inside the camperlist component
//set up the camper list item file
//iteratoring thru campers object that we got from app and 
//maping over each one and creating a new array and in that array 
//will be a hundred camper list items
//now we can take information from camper object and pass it as props 
//to the camper list items component
//going to use props to build something out