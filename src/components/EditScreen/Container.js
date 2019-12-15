import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Container extends Component {


    saveResize = (width,height) => {
        console.log('BEfore ITEM', this.props.item)
        this.props.item.width = width
        this.props.item.height = height
        console.log('After ITEM', this.props.item)
        this.props.setCurrentItem({currentItem:this.props.item});
    }

    render() {

        const style = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid",
            borderColor:this.props.item.borderColor,
            backgroundColor:this.props.item.backgroundColor,
            borderWidth:this.props.item.borderThickness,
            borderRadius:this.props.item.borderRadius,
            zIndex:'-moz-initial',

          };
        
          //bounds property to include the constraints    

        return (
            
            <Rnd ref="currentContainer" onClick={() => this.props.setCurrentItem(this.props.item)} bounds=".canvas_border" style={style} 
            default={{x: this.props.item.Xpos,y: this.props.item.Ypos,width: this.props.item.width,height: this.props.item.height}}
            onResizeStop={(e, direction, ref, delta, position) => {
                this.saveResize(ref.style.width,ref.style.height)
              }}>
                    <div style={{zIndex:'-moz-initial',backgroundColor:'yellow'}}></div>
            </Rnd>
        )
    }
}

// <div >
                
//             </div>

export default Container
