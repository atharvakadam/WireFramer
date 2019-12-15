import React, { Component } from 'react'
import Button from 'react-materialize'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

export class RightComponent extends Component {

    updateTextChange = (item) => {
        console.log('NAMETEXT CHANGE ALERT')
        item.text = this.refs.nameText.value
        this.props.setCurrentItem(item)
    }

    updateFontSizeChange = (item) => {
        console.log('FONTSIZE CHANGE ALERT')
        item.fontSize = parseInt(this.refs.fontSize.value)
        this.props.setCurrentItem(item)
    }

    updateBackgorundColorChange = (item) => {
        console.log('BACKGROUNDCOLOR CHANGE ALERT')
        item.backgroundColor = this.refs.backgroundColor.value
        this.props.setCurrentItem(item)
    }

    updateBorderColorChange = (item) => {
        console.log('BORDERCOLOR CHANGE ALERT')
        item.borderColor = this.refs.borderColor.value
        this.props.setCurrentItem(item)
    }

    updateBorderThicknessChange = (item) => {
        console.log('BORDERCOLOR CHANGE ALERT')
        item.borderThickness = parseInt(this.refs.borderThickness.value)
        this.props.setCurrentItem(item)
    }

    updateBorderRadiusChange = (item) => {
        console.log('BORDERCOLOR CHANGE ALERT')
        item.borderRadius = parseInt(this.refs.borderRadius.value)
        this.props.setCurrentItem(item)
    }

    render() {

        console.log('Current Item:', this.props.currentItem)
        // if(this.props.currentItem!=null){
        //     console.log(1)
            return (
                <div>
                    <div className="column_border" style={{height:'100%'}}>
                        <div className="left" style={{fontWeight:'bold', paddingLeft:'30px',paddingTop:'5px'}}>Properties:</div>
                        <br></br>
                        <br></br>
                        <input ref="nameText" style={{width:'80%'}} value={this.props.currentItem?this.props.currentItem.text:''}  onChange={() => this.updateTextChange(this.props.currentItem)}></input>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'50px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Font Size:     </span>
                            <input ref="fontSize" style={{width:'35%',height:'20px'}} className="top left active" type="number" name="name" id="name" value={this.props.currentItem?(this.props.currentItem.fontSize):0} onChange={() => this.updateFontSizeChange(this.props.currentItem)}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'80px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Background:     </span>
                            <input ref="backgroundColor" className="top left active" type="color" name="name" id="name" value={this.props.currentItem?(this.props.currentItem.backgroundColor):'#ffffff'}  onChange={() => this.updateBackgorundColorChange(this.props.currentItem)}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'73px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Color:     </span>
                            <input ref="borderColor" className="top left active" type="color" name="color" id="name" value={this.props.currentItem?(this.props.currentItem.borderColor):'#ffffff'} onChange={() => this.updateBorderColorChange(this.props.currentItem)}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'25px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Thickness:     </span>
                            <input ref="borderThickness" style={{width:'18%',height:'20px'}} className="top left active" type="number" name="name" id="name" value={this.props.currentItem?this.props.currentItem.borderThickness:0} onChange={() => this.updateBorderThicknessChange(this.props.currentItem)}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'50px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Radius:     </span>
                            <input ref="borderRadius" style={{width:'18%',height:'20px'}} className="top left active" type="number" name="name" id="name" value={this.props.currentItem?this.props.currentItem.borderRadius:0} onChange={() => this.updateBorderRadiusChange(this.props.currentItem)}/>
                        </div>
                    </div>
                </div>
            );
        // }
        // else{
        //     return(
        //         <div><div className="column_border" style={{height:'100%'}}></div></div>
        //     );
        // }
        // else{
        //     return(
        //         <div>
        //                 <div className="column_border" style={{height:'100%'}}></div>
        //         </div>        
    
        //     )
        // }
        
        
    }
}

// const mapStateToProps = (state) => {
//     return {
//         wireFrames: state.firestore.ordered.WireFrames,
//         auth: state.firebase.auth,
//     };
// };

export default RightComponent;
// compose(connect(mapStateToProps))()