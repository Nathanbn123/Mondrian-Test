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

    const getRandomNumber = (max) => {
        return Math.floor(Math.random() *max)
    }

    
   const  makeBoxes= ()=>{
    for (let i = 0; i<60; i++){
        boxes.push()
    }

    }

    function boxFlip() {
        if(colPosition === "flexRowChild") {
            colSwitch("flexColChild")
        } else {
            colSwitch("flexRowChild")
        }
        console.log(colPosition)
    }

    return (
       
        <div className="flexContainer">
        
        <div className={colPosition}
        
        onClick={() => boxFlip()}
        
        >
          <div className="flexGrandChild"
            style={{
                backgroundColor: colors[getRandomNumber(3)],
     
            }}
           
         >
          </div>
          <div className="flexGrandChild"
          style={{
            backgroundColor: colors[getRandomNumber(3)],
        }}
            >
          </div>
        </div>
        <div className="flexColChild"
        style={{
            flexDirection: {colPosition}
        }}
        // onClick={() => colSwitch(colPosition = 'column')}
        
        >
          <div 
            className="flexColGrandChild"
           >   
             
          </div>
          <div 
            className="flexColGrandChild"
            >   

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


export default ChildBoxes