import React, { Component, useState } from 'react'


function ChildBoxes() {
 
    const boxes = [];
    
    const colors = ['red', 'white', 'blue', 'yellow']

    let [colPosition, colSwitch] = useState("flexColChild")
    let [rowPosition, rowSwitch] = useState("flexRowChild")

    

    const getRandomNumber = (max) => {
        return Math.floor(Math.random() *max)
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
    
                 
            )}
    
        }

    makeBoxes()
    return (
       
    <div className="flexContainer">
        {boxes}
      </div>

        )
    }


export default ChildBoxes