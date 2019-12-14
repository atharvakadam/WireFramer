import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Label extends Component {


    render() {

        const style = {
            padding: '1em',
            border: '0.15em solid',
            position: 'relative'}

        return (
            <div>
                <Rnd style={style} bounds=".canvas_border" default={{x: 100,y: 100,width: 200,height: 100}}>
                    Prompt for input:
                </Rnd>
            </div>
        )
    }
}

export default Label
