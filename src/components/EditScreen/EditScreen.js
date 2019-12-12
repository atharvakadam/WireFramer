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

export class EditScreen extends Component {
    render() {
        return (
            <div>
            <div className="input-field">
                    <span className="left" style={{paddingRight:'30px',paddingLeft:'10px',paddingBottom:'10px',fontSize:'15px'}}>Name:     </span>
                    <input style={{width:'90%',bottom:'10%'}} className="left active" type="text" name="name" id="name"/>
            </div>
              <div className="list_item_card_toolbar1">
              <div className="column_border">
                <div style={{height:'6%'}} className="save_close_border"></div>
                <br></br>
                <img style={{width:'60%',height:'15%'}} src={containerimg}></img>
              </div>
              <div className="canvas_border">MY FUCKING CANVAS</div>
              <div className="column_border">Properties</div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const { wireFrames } = state.firestore.data;
    const wireFrame = wireFrames ? wireFrames[id] : null;
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
