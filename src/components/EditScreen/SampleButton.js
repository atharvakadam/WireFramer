import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class SampleButton extends Component {

    saveResize = (width,height) => {
        console.log('BEfore ITEM', this.props.item)
        this.props.item.width = width
        this.props.item.height = height
        console.log('After ITEM', this.props.item)
        this.props.setCurrentItem({currentItem:this.props.item});
    }
    render() {

        // added button style according to the item passed in, could be database or new Item
        const style = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid",
            zIndex:'-moz-initial',
            borderColor:this.props.item.borderColor,
            backgroundColor:this.props.item.backgroundColor,
            borderWidth:this.props.item.borderThickness,
            borderRadius:this.props.item.borderRadius,
            fontSize:this.props.item.fontSize,
          };

          //bounds property to include the constraints    

        return (
            // <div onClick={() => this.props.setCurrentItem(this.props.item)}>
                <Rnd bounds=".canvas_border" style={style} default={{x: this.props.item.Xpos,y: this.props.item.Ypos,width: this.props.item.width,height: this.props.item.height}}
                onClick={() => this.props.setCurrentItem(this.props.item)}
                onResizeStop={(e, direction, ref, delta, position) => {
                    this.saveResize(ref.style.width,ref.style.height)
                  }}>
                {this.props.item.text.includes('added')?"Submit":this.props.item.text}
                </Rnd>
            // </div>
        )
    }
}

export default SampleButton
