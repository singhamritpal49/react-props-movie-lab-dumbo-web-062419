import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {



    if (this.props.rating === 0 ) {
      return <h4> No Rating Found </h4> 
    } 
    else {
      console.log(this.props.rating)
      return <img src={imgMapper[this.props.rating]} alt="" />
      
    }
    // implement meeeee! See the readme for instructions
  }

  render() {
    // console.log("➫", this.props)

    const eachGenre = this.props.genre.map(genre => {
      return genre
    })

  
    console.log(this.props.genre.join( ", " ))
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        
        {  this.generateRatingElement() /* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */ }
         
        <span />
        <h5 className="genres">{this.props.genre.join( ", " )}</h5>
      </div>
    )
  }
}
