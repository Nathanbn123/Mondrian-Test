import React, { Component } from 'react'


class ChildBoxes extends Component {

    constructor() {
        super()
        this.state = {
            position: [],
            color: ["red", "blue", "white", "yellow"]
        }
    }

    getRandomNumber(max) {
        return Math.floor(Math.random() *max)
    }

    boxClick(){
        this.setState({
            color: ["blue", "white", "yellow", "red"]
        })
    }

render() {
    return (
        <div className="flexContainer">
        
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div 
            className="flexColGrandChild"
            style={{backgroundColor: this.state.color[this.getRandomNumber(3)]}}
             onClick={() => this.boxClick()}>   
             

          </div>
          <div 
            className="flexColGrandChild"
            style={{backgroundColor: this.state.color[this.getRandomNumber(3)]}}
             onClick={() => this.boxClick()}>   

          </div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>

        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>

        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>

        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>

        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
        <div className="flexRowChild">
          <div className="flexGrandChild"></div>
          <div className="flexGrandChild"></div>
        </div>
        <div className="flexColChild">
          <div className="flexColGrandChild"></div>
          <div className="flexColGrandChild"></div>
        </div>
      </div>

        )
    }
}

export default ChildBoxes