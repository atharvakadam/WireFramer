import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Container extends Component {
    render() {

        const style = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px black",
            borderRadius:'5px',
            zIndex:'-moz-initial',
            background: "#f0f0f0"
          };
        
          //bounds property to include the constraints    

        return (
            <div>
                <Rnd bounds=".canvas_border" style={style} default={{x: 100,y: 100,width: 200,height: 100}}>
                    <div style={{zIndex:'-moz-initial',backgroundColor:'yellow'}}></div>
                </Rnd>
            </div>
        )
    }
}

export default Container
