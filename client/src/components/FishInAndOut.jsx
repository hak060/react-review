import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import {Form, TextToolbar} from 'react-bootstrap-form'
//FishInAndOut
export default class FishInAndOut extends Component {
  constructor(props) {
    super(props)
    this.handleClickInserFish = this.handleClickInserFish.bind(this)
    this.handleClickGetFish = this.handleClickGetFish.bind(this)

    this.state = {
      pairs: ['bloop bloop bloop'],
      showNewPairs: false
    }
  }

  handleClickInserFish() {
    this.generateRandomPairs()
  }

  handleClickGetFish() {
    this.spamCalendars()
  }

  spamCalendars() {
    console.log('test');
  }

  generateRandomPairs() {
    console.log('test');
  }

  render() {
    return(
      <div className="pairs-list">
        <ButtonToolbar>
          <Button bsStyle="success" onClick={this.handleClickInserFish}>Insert Fish</Button>
          <Button bsStyle="success" onClick={this.handleClickGetFish}>Get Fish</Button>
        </ButtonToolbar>
        {/* <TextToolbar>

        </TextToolbar> */}

        { this.state.showNewPairs ? 
          (<ul>{this.state.pairs.map( (pair, index) => (<li key={index}>{pair.engineer1.name}{pair.engineer2 ? '/' + pair.engineer2.name: null}</li>) ) }</ul>)
          :
          null
        }
      </div>
    )
  }
}