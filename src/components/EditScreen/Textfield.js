import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Textfield extends Component {
    render() {

        // added textfield style according to the item passed in, could be database or new Item
        const style = {
            paddingLeft:'10px',
            verticalAlign:'center',
            textAlign:'left',
            alignItems: "center",
            justifyContent: "center",
            border: "solid",
            zIndex:'-moz-initial',
            borderColor:this.props.item.borderColor,
            backgroundColor:this.props.item.backgroundColor,
            borderWidth:this.props.item.borderThickness,
            borderRadius:this.props.item.borderRadius,
            fontSize:this.props.item.fontSize,
            color:'grey',
          };
        
        return (
            <div onClick={() => this.props.setCurrentItem(this.props.item)} >
                <Rnd className="left" bounds=".canvas_border" style={style} default={{x: this.props.item.Xpos,y: this.props.item.Ypos,width: this.props.item.width,height: this.props.item.height}}>
                   {this.props.item.text.includes('added')?"Input":this.props.item.text}
                </Rnd>
            </div>
        )
    }
}

export default Textfield
