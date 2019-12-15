import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Label extends Component {


    render() {

        // added style according to the item passed in, could be database or new Item
        const style = {
            padding: '1em',
            border: '0.15em solid',
            borderColor:this.props.item.borderColor,
            backgroundColor:this.props.item.backgroundColor,
            borderWidth:this.props.item.borderThickness,
            borderRadius:this.props.item.borderRadius,
            fontSize:this.props.item.fontSize,
            position: 'relative'}

        //bounds property to include the constraints    

        return (
            <div onClick={() => this.props.setCurrentItem(this.props.item)} onBlur={() => console.log('NULL')}>
                <Rnd style={style} bounds=".canvas_border" default={{x: this.props.item.Xpos,y: this.props.item.Ypos,width: this.props.item.width,height: this.props.item.height}}>
                {this.props.item.text.includes('added')?"Prompt for Input:":this.props.item.text}
                </Rnd>
            </div>
        )
    }
}

export default Label
