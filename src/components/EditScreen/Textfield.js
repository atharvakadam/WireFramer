import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Textfield extends Component {
    render() {

        const style = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px black",
            borderRadius:'5px'
            // background: "#f0f0f0"
          };

        return (
            <div>
                <Rnd style={style} default={{x: 100,y: 100,width: 216,height: 38}}>
                    <div><input placeholder="Input"></input></div>
                </Rnd>
            </div>
        )
    }
}

export default Textfield
