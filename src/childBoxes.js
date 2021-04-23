import React, { Component } from 'react'


class ChildBoxes extends Component {

    constructor() {
        super()
        this.state = {
            color: 'red'
        }
    }

    boxClick(){
        this.setState({
            bgColor: "red"
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
            style={{backgroundColor: this.state.bgColor}}
             onClick={() => this.boxClick()}>   

          </div>
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