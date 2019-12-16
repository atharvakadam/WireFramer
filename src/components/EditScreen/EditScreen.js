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

    

    ctrlD = (event) => {
      if (event.ctrlKey===true  && event.key ==="d") {
          //   window.alert('Undo!');
          console.log(this.state.currentItem)
        if(this.state.currentItem){
          var newItem = {
            "key": this.props.wireFrame.items.length,
            "type": this.state.currentItem.type,
            "width": this.state.currentItem.width,
            "height": this.state.currentItem.height,
            "Xpos": this.state.currentItem.Xpos + 100,
            "Ypos": this.state.currentItem.Ypos + 100,
            "Zpos": this.state.currentItem.Zpos,
            "text": this.state.currentItem.text,
            "fontSize": this.state.currentItem.fontSize,
            "backgroundColor":this.state.currentItem.backgroundColor,
            "borderColor": this.state.currentItem.borderColor,
            "fontColor": this.state.currentItem.fontColor,
            "borderThickness": this.state.currentItem.borderThickness,
            "borderRadius": this.state.currentItem.borderRadius
          }
            // var newItem = this.state.currentItem
            // newItem.key = this.props.wireFrame.items.length
            this.props.wireFrame.items.push(newItem);
            console.log(this.props.wireFrame) 
            this.setState({wireFrame:this.props.wireFrame});
            this.setState({currentItem:newItem})
            console.log(this.state.wireFrame)
        }
        
        event.preventDefault();
              
      }
    }

    deleteItem = (event) => {
      
      if(this.state.currentItem){
        var itemToRemoveKey = this.state.currentItem.key
        console.log("itemtoremovekey", itemToRemoveKey);
        console.log(this.props.wireFrame)
        this.props.wireFrame.items.splice(itemToRemoveKey,1);
        for(let i=0;i<this.props.wireFrame.items.length;i++){
          this.props.wireFrame.items[i].key = i
        }

        console.log(this.props.wireFrame.items)
        this.setState({wireFrame:this.props.wireFrame})
        this.setState({currentItem:null})
        // var newItems = this.state.wireFrame.items
        // if()
        

        // for(let i=0;i<newItems.length;i++){
        
        // }
      }
          
      event.preventDefault();
    }
    
    zoomIn = () => {
        this.props.wireFrame.zoom = this.props.wireFrame.zoom + 0.25
        console.log('New zoom IN:',this.props.wireFrame.zoom )
        this.setState({'wireFrame':this.props.wireFrame})
        console.log(this.state.wireFrame)

    }

    zoomOut = () => {
        this.props.wireFrame.zoom = this.props.wireFrame.zoom - 0.25
        console.log('New zoom OUT:',this.props.wireFrame.zoom )
        this.setState({'wireFrame':this.props.wireFrame})
        console.log(this.state.wireFrame)
    }

    setCurrentItem = (item) => {
        // this.updateCssOnSelect(item);
        // e.stopPropagation();
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
                    "fontSize": type==='Container'?-1:13,
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
        this.setState({currentItem:NewItem});


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
              <LeftComponent zoomIn={this.zoomIn} zoomOut={this.zoomOut} saveAndUpdateDatabase={this.saveAndUpdateDatabase} makeNewItem={this.makeNewItem} containerState={this.state.containerState} ></LeftComponent>
              <MiddleComponent deleteItem={this.deleteItem} ctrlD={this.ctrlD} setCurrentItem={this.setCurrentItem} wireFrame={this.state.wireFrame} currentItem={this.state.currentItem} ></MiddleComponent>
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
