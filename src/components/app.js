import React, { Component } from 'react';
import axios from 'axios';
import MDSpinner from 'react-md-spinner'//importing the loading spinner for visual effects during the  loading phase of the app
import CamperList from './camper_list.js'
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: 'recentCampers'
    };

  }
//before app renders it makes a request to the two api end point and sets the state of our component
//and updates the camper list depending on the buttons we click and camper list returns a table of items and
//we nest the hundred camper items , iteratoring over campers object and use map to retur
//a new array of components with the key props camper , number , username , recent, and alltime props of the campers object
//now creating loading message to make the project more professional
  

//make concurrent request and set state to response

//will run once before the intial render of your component
//make fat arrow function to remove setState of null error
  componentWillMount(){
    axios.all([this.fetchRecentCampers(),this.fetchAllTimeCampers()])
    .then(axios.spread((recentCampers, allTimeCampers) =>{
      console.log(recentCampers);
      this.setState({
        //this is the only time you can write setState
        
        recentCampers: recentCampers.data,//recentCampers: recentCampers
        allTimeCampers: allTimeCampers.data//recentCampers: recentCampers
      })
    }));
  }
fetchRecentCampers(){
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}
fetchAllTimeCampers(){
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/allTime');
}
changeView(view){
  this.setState({currentView: view})//changes viewing top:recent or alltime
}
//${this.state.currentView} is coming from the state object and the 
//initial view of the current object is recentCampers
//cannot create set state inside render function
//can call this.setState inside render method
  //! is called the bang operator
  //zero is a falsy value in javascript so the bellow line evaluates to true because the length of the campers object is zero because the request is still in the processing stage and not in the outputing stage
  //after the request is completed, re rendering occurs and the length of the campers object is no longer zero so  the loading goes away and the table with the camper props are displayed
  //now downloading the react spinner module 
  render(){
    if (!this.state.recentCampers.length && !this.state.allTimeCampers.length){
      return <MDSpinner className='spinner' size={200}/>
    }
   return(
    <div>
      <h2>{`Viewing Top ${this.state.currentView}`}</h2>
      <button onClick={()=> this.changeView('recentCampers')} className='btn btn-primary'>Recent</button>
      <button onClick={() => this.changeView('allTimeCampers')}className='btn btn-primary'>All Time</button>
      <CamperList campers={this.state[this.state.currentView]} />
    </div>
   );
}
}
//camperlist is the child and applist is the , done thru props
//in es5 the inner inner this refers back to the global scope window, same as when calling this byitself 
//in es6 the inner inner this refers to the object itself
//initialy blank after the axios returns the response from the server
//it is going to update the state object and rerender the state object
//flux and redux is used to comunicate child to child
//props are state objects used to returning information from a server