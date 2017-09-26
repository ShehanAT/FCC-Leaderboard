//dont need state or lifecycle components because this is a 
//functionnal component
//now writing boilerplate code:
import React from 'react';
//this is what goes for each of the columns of the table 
const CamperListItem = ({ camper, number}) =>{//these are the props that will be extracted from the campers object
    return (
        <tr>
            <td>{number}</td>
            <td><a href={`https://freecodecamp.com/${camper.username}`} target='_blank'>{camper.username}</a></td>
            <td>{camper.recent}</td>
            <td>{camper.alltime}</td>
        </tr>
    );
}
export default CamperListItem;