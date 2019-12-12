import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

// import {Link} from 'react-router-dom'
// import {Modal} from 'react-materialize';
// import {Button} from 'react-materialize';
// import {Timestamp} from 'firebase';
// import {firebase} from 'firebase';

var containerimg = require('../../images/container.png');
var labelimg = require('../../images/label.png');
var buttonimg = require('../../images/button.png');
var textfieldimg = require('../../images/textfield.png');
var zoomout = require('../../images/baseline_zoom_out_black_18dp.png');
var zoomin = require('../../images/baseline_zoom_in_black_18dp.png');


export class EditScreen extends Component {
    render() {
        
        return (
            <div>
            <div className="input-field">
                    <span className="left" style={{paddingRight:'30px',paddingLeft:'10px',paddingBottom:'10px',fontSize:'18px'}}>Name:     </span>
                    <input style={{width:'88%',height:'30px'}} className="top left active" type="text" name="name" id="name" defaultValue={this.props.wireFrame?this.props.wireFrame.name:""}/>
            </div>
              <div className="list_item_card_toolbar1">
                <div className="column_border">
                  <div style={{height:'6%'}} className="save_close_border">
                    <span className="left"><img src={zoomin}></img></span>
                    <span className="left"><img src={zoomout}></img></span>
                    <span> </span>
                    <span style={{top:'10%',display:'grid',gridTemplateColumns:'30% 15% 33%'}} className="center">
                      <button>Save</button>
                      <span> </span>
                      <button>Close</button>
                    </span>
                  </div>
                  <br></br>
                  <img style={{width:'60%',height:'15%'}} src={containerimg}></img>
                  <div>Container</div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div>Prompt for input:</div>
                  <img style={{width:'27%',height:'5%'}} src={labelimg}></img>
                  <br></br>
                  <br></br>
                  <br></br>
                  <img style={{width:'60%',height:'6%'}} src={buttonimg}></img>
                  <div>Button</div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <img style={{width:'80%',height:'6%'}} src={textfieldimg}></img>
                  <div>Textfield</div>
                  </div>
              <div className="canvas_border">MY FUCKING CANVAS</div>
              <div className="column_border">Properties
                <br></br>
                <br></br>
                <input style={{width:'80%'}} defaultValue={'Submit'}></input>
                <br></br>
                <div className="input-field">
                    <span className="left" style={{paddingRight:'50px',paddingLeft:'30px',fontSize:'15px'}}>Font Size:     </span>
                    <input style={{width:'35%',height:'20px'}} className="top left active" type="number" name="name" id="name" defaultValue={0}/>
                </div>
                <br></br>
                <br></br>
                <div className="input-field">
                    <span className="left" style={{paddingRight:'80px',paddingLeft:'30px',fontSize:'15px'}}>Background:     </span>
                    <input className="top left active" type="color" name="name" id="name" defaultValue={0}/>
                </div>
                <br></br>
                <br></br>
                <div className="input-field">
                    <span className="left" style={{paddingRight:'73px',paddingLeft:'30px',fontSize:'15px'}}>Border Color:     </span>
                    <input className="top left active" type="color" name="name" id="name" defaultValue={0}/>
                </div>
                <br></br>
                <br></br>
                <div className="input-field">
                    <span className="left" style={{paddingRight:'25px',paddingLeft:'30px',fontSize:'15px'}}>Border Thickness:     </span>
                    <input style={{width:'18%',height:'20px'}} className="top left active" type="number" name="name" id="name" defaultValue={0}/>
                </div>
                <br></br>
                <br></br>
                <div className="input-field">
                    <span className="left" style={{paddingRight:'50px',paddingLeft:'30px',fontSize:'15px'}}>Border Radius:     </span>
                    <input style={{width:'18%',height:'20px'}} className="top left active" type="number" name="name" id="name" defaultValue={0}/>
                </div>
              </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    // const { wireFrames } = state.firestore.data
    const { WireFrames } = state.firestore.data;
    console.log(WireFrames);
    console.log(id);
    const wireFrame = WireFrames ? WireFrames[id] : null;
    console.log(wireFrame);
    if(wireFrame!=null){
      wireFrame.id = id;
    }
    
  
    return {
      wireFrame,
      auth: state.firebase.auth,
    };
  };

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'WireFrames'},
    ]),
  )(EditScreen);
