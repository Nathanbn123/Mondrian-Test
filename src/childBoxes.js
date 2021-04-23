import React, { Component, useState } from 'react'


function ChildBoxes() {
 
//   const boxFlip = () =>{
//         if(this.state.position !== 'row') {
//            this.setState({
//             position: "column"
//            })
            
//         } else {
//             this.setState({
//                 position: "row"
//                })
//         }
//     }




//    const boxClick = () =>{
//         this.setState({
        
//             color: ["blue", "white", "yellow", "red"]
//         })
//     }

 


    // let positionStyle= {

    // }

    // let rowStyle = {
    //     flexDirection: 'row'
    // }

    // let colStyle = {
    //     flexDirection: "column"
    // }

    const boxes = [];
    
    const colors = ['red', 'white', 'blue', 'yellow']

    let [colPosition, colSwitch] = useState("flexColChild")
    let [rowPosition, rowSwitch] = useState("flexRowChild")

    const getRandomNumber = (max) => {
        return Math.floor(Math.random() *max)
    }

    
   const  makeBoxes= ()=>{
    for (let i = 0; i<60; i++){
        boxes.push(
            <div>
            <div className={colPosition} onClick={() => colFlip()}>
            <div className="flexGrandChild" style={{backgroundColor: colors[getRandomNumber(4)]}}/>
            <div className="flexGrandChild" style={{ backgroundColor: colors[getRandomNumber(4)],}}/>
           
          </div>
          
          <div className={rowPosition} onClick={() => rowFlip()}>
            <div className="flexColGrandChild" style={{ backgroundColor: colors[getRandomNumber(4)],}}/>
            <div className="flexColGrandChild" style={{ backgroundColor: colors[getRandomNumber(4)],}}/>
          </div>
          </div>

        )
    }

    }

    function colFlip() {
        if(colPosition === "flexRowChild") {
            colSwitch("flexColChild")
        } else {
            colSwitch("flexRowChild")
        }
 
    }

    function rowFlip() {
        if(rowPosition === "flexColChild") {
            rowSwitch("flexRowChild")
        } else {
            rowSwitch("flexColChild")
        }
      
    }

        makeBoxes()
    return (
       
        <div className="flexContainer">
        
        {boxes}
       




      </div>

        )
    }


export default ChildBoxes