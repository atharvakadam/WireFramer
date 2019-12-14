import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Textfield extends Component {
    render() {

        const style = {
            paddingLeft:'10px',
            verticalAlign:'center',
            textAlign:'left',
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px black",
            borderRadius:'5px',
            height:'100%',
            zIndex:'-moz-initial',
            backgroundColor: "white", 
            color:'grey',
          };
        // display: "flex",  <input className="active" type="text" defaultValue="Leol" placeholder="Input"></input>
        return (
            <div>
                <Rnd className="left" bounds=".canvas_border" style={style} default={{x: 100,y: 100,width: 216,height: 38}}>
                   Input
                </Rnd>
            </div>
        )
    }
}

export default Textfield
