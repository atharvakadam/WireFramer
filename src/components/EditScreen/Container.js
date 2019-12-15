import React, { Component } from 'react'
import { Rnd } from 'react-rnd';

export class Container extends Component {
    render() {

        const style = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid",
            borderColor:this.props.item.borderColor,
            backgroundColor:this.props.item.backgroundColor,
            borderThickness:this.props.item.borderThickness,
            borderRadius:this.props.item.borderRadius,
            zIndex:'-moz-initial',

          };
        
          //bounds property to include the constraints    

        return (
            <div onClick={() => this.props.setCurrentItem(this.props.item)}>
                <Rnd bounds=".canvas_border" style={style} default={{x: this.props.item.Xpos,y: this.props.item.Ypos,width: this.props.item.width,height: this.props.item.height}}>
                    <div style={{zIndex:'-moz-initial',backgroundColor:'yellow'}}></div>
                </Rnd>
            </div>
        )
    }
}

export default Container
