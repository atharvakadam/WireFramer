import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Label extends Component {

    saveResize = (width,height) => {
        console.log('BEfore ITEM', this.props.item)
        this.props.item.width = width
        this.props.item.height = height
        console.log('After ITEM', this.props.item)
        this.props.setCurrentItem({currentItem:this.props.item});
    }
    saveDrag = (x,y) => {
        console.log('BEfore ITEM', this.props.item)
        this.props.item.Xpos = x
        this.props.item.Ypos = y
        console.log('After ITEM', this.props.item)
        this.props.setCurrentItem({currentItem:this.props.item});
    }
    updateCssOnSelect(){
        if (this.props.currentItem === this.props.item){
          return (
            <div>
                <div className="currentItem left top"></div>
                <div className="currentItem left bottom"></div>
                <div className="currentItem right top"></div>
                <div className="currentItem right bottom"></div>
            </div>
          )
          
        }
        else{
          return "";
        }
      }

    render() {

        // added style according to the item passed in, could be database or new Item
        const style = {
            padding: '1em',
            border: '0.15em solid',
            borderColor:this.props.item.borderColor,
            // backgroundColor:this.props.item.backgroundColor,
            backgroundColor:"##ffffff",
            borderWidth:this.props.item.borderThickness,
            borderRadius:this.props.item.borderRadius,
            fontSize:this.props.item.fontSize,
            color:this.props.item.fontColor,
            position: 'relative'}

        //bounds property to include the constraints    
        //() => this.props.setCurrentItem(this.props.item)
        return (
            // <div >
                <Rnd style={style} bounds=".canvas_border" default={{x: this.props.item.Xpos,y: this.props.item.Ypos,width: this.props.item.width,height: this.props.item.height}} 
                onClick={() => this.props.setCurrentItem(this.props.item)} onBlur={() => console.log('NULL')}
                onResizeStop={(e, direction, ref, delta, position) => {
                    this.saveResize(ref.style.width,ref.style.height)
                  }}
                  onDragStop={(e, d) => { this.saveDrag(d.x,d.y) }}>
                {this.props.item.text.includes('added')?"Prompt for Input:":this.props.item.text}
                {this.updateCssOnSelect()}
                </Rnd>
            // </div>
        )
    }
}

export default Label
