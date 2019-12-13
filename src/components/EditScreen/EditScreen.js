import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import LeftComponent from './LeftComponent';
import MiddleComponent from './MiddleComponent';
import RightComponent from './RightComponent';

// import {Link} from 'react-router-dom'
// import {Modal} from 'react-materialize';
// import {Button} from 'react-materialize';
// import {Timestamp} from 'firebase';
// import {firebase} from 'firebase';


// <img style={{width:'27%',height:'5%'}} src={labelimg}></img>

export class EditScreen extends Component {
    render() {
        
        return (
            <div>
            <div className="input-field">
                    <span className="left" style={{paddingRight:'30px',paddingLeft:'10px',paddingBottom:'10px',fontSize:'18px'}}>Name:     </span>
                    <input style={{width:'88%',height:'30px'}} className="top left active" type="text" name="name" id="name" defaultValue={this.props.wireFrame?this.props.wireFrame.name:""}/>
            </div>
              <div className="list_item_card_toolbar1">
              <LeftComponent></LeftComponent>
              <MiddleComponent></MiddleComponent>
              <RightComponent></RightComponent>
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
