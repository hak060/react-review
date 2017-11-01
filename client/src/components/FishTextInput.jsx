import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'

export default class FishTextInput extends Component {
  constructor(props) {
    super(props)
    this.handleClickInserFish = this.handleClickInserFish.bind(this)
    // this.handleClickGetFish = this.handleClickGetFish.bind(this)

    this.state = {
      fishes: [''],
      test: false
    }
  }

  handleClickInserFish() {
    this.doSomething1()
  }

  doSomething1() {
    console.log('test');
  }

  render() {
    return(
      <div>
        <FormGroup>
          <label> Name: <input type="text" name="name" /></label>
          <label> Age: <input type="text" name="age" /></label>
          <label> Description: <input type="text" name="description" /></label>
          <input type="submit" value="Submit" onClick={this.handleClickInserFish}/>
        </FormGroup>
      </div>
    )
  }
}