import React, { Component } from 'react'


class ChildBoxes extends Component {

    constructor() {
        super()
        this.state = {
            position: 'row',
            color: ["red", "blue", "white", "yellow"]
        }
    }

    getRandomNumber(max) {
        return Math.floor(Math.random() *max)
    }

    

    boxFlip (){
        if(this.state.position !== 'row') {
           this.setState({
            position: "column"
           })
            
        } else {
            this.setState({
                position: "row"
               })
        }
    }




    boxClick(){
        this.setState({
        
            color: ["blue", "white", "yellow", "red"]
        })
    }

 


render() {

    // let positionStyle= {

    // }

    // let rowStyle = {
    //     flexDirection: 'row'
    // }

    // let colStyle = {
    //     flexDirection: "column"
    // }

    const boxes = [];
    




    
   const  makeBoxes= ()=>{
    for (let i = 0; i<60; i++){
        boxes.push()
    }

    }


    return (
        <div className="flexContainer">
        
        <div className="flexRowChild"
        style={{flexDirection: this.state.position}}
        onClick={() => this.boxFlip()}
        >
          <div className="flexGrandChild"
            style={{
                backgroundColor: this.state.color[this.getRandomNumber(3)],
            }}
         >
          </div>
          <div className="flexGrandChild"
            style={{backgroundColor: this.state.color[this.getRandomNumber(3)]}}
            onClick={() => this.boxClick()}>
          </div>
        </div>
        <div className="flexColChild"
        style={{flexDirection: this.state.position}}
        >
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