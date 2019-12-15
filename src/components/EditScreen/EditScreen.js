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

    constructor(props){
      super(props)
      
      // this.state = {wireFrame: this.props.wireFrame}
      // if(!this.props.wireFrame){
        this.state = {wireFrame:this.props.wireFrame,
          currentItem:null}
      // }
      
      
    }

    // state={
    //   wireframe:this.props.wireFrame,
    //       currentItem:null
    // }
    
    updateNameChange = () => {
        this.state.wireFrame.name = this.refs.name.value
    }


    setCurrentItem = (item) => {
        console.log(item)
        // e.preventDefault()
        // console.log(item.currentItem.key)
        console.log(this.props.wireFrame)
        console.log(this.state.wireFrame)
        // this.props.wireFrame.items[item.key-1] = item
        console.log("UPDATED WIREFRAME: ", this.state.wireFrame);
        this.setState({currentItem:item});
        // this.setState({wireFrame:this.props.wireFrame});
        
        
        // return item
    }

    saveAndUpdateDatabase = () => {
      console.log(this.state)
      this.props.firestore.collection('WireFrames').doc(this.state.wireFrame.id).update({
        name:this.state.wireFrame.name,
        owner:this.state.wireFrame.owner,
        zoom:this.state.wireFrame.zoom,
        timestamp:this.props.firestore.FieldValue.serverTimestamp(),
        items:this.state.wireFrame.items,
      })
    }

    makeNewItem = (type) => {
        
        var NewItem = {
                    "key": this.props.wireFrame.items.length,
                    "type": type,
                    "width": 200,
                    "height": 100,
                    "Xpos": 0,
                    "Ypos": 0,
                    "Zpos": 0,
                    "text": "added"+type,
                    "fontSize": -1,
                    "backgroundColor":type==='Button'? "#d6d6d6":type==='Label'?"##ffffff":"#ffffff",
                    "borderColor": type==='Label'?"#ffffff":"#111111",
                    "fontColor": "#111111",
                    "borderThickness": 3,
                    "borderRadius": 3
        }
        console.log(type);
        console.log(this.props.wireFrame)  
        this.props.wireFrame.items.push(NewItem);
        console.log(this.props.wireFrame) 
        this.setState({wireFrame:this.props.wireFrame});


    }

    render() {
        // console.log(this.state.containerState)
        const wireFrame = this.props.wireFrame
        const auth = this.props.auth;
        // console.log(this.state.wireFrame)
        // console.log(wireFrame)
        // console.log(this.props.wireFrame.it)

        if(!auth.uid) {
          return <Redirect to="/"></Redirect>
        }
        if(wireFrame === null){
          return <Redirect to="/"></Redirect>
        }

        return (
            <div>
            <div className="input-field">
                    <span className="left" style={{paddingRight:'30px',paddingLeft:'10px',paddingBottom:'10px',fontSize:'18px'}}>Name:     </span>
                    <input onBlur={this.updateNameChange} ref="name" style={{width:'88%',height:'30px'}} className="top left active" type="text" name="name" id="name" defaultValue={this.props.wireFrame?this.props.wireFrame.name:""}/>
            </div>
              <div className="list_item_card_toolbar1">
              <LeftComponent saveAndUpdateDatabase={this.saveAndUpdateDatabase} makeNewItem={this.makeNewItem} containerState={this.state.containerState} ></LeftComponent>
              <MiddleComponent setCurrentItem={this.setCurrentItem} wireFrame={this.state.wireFrame}></MiddleComponent>
              <RightComponent currentItem={this.state.currentItem} setCurrentItem={this.setCurrentItem} ></RightComponent>
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
