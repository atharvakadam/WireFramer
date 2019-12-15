import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import WireFrameLinks from './WireFrameLinks'
import Query from 'firebase'
import Direction from 'firebase';

class HomeScreen extends Component {

    handleNewWireFrame = () => {

        var newObject = {name:'Unknown', 
                        owner:this.props.auth.uid, 
                        zoom:100,
                        items:[],
                        timestamp:this.props.firestore.FieldValue.serverTimestamp()}  

        // console.log(this.props.firestore.collection('WireFrames').add(newObject)).then(function(docRef){
        //     console.log("Document written with ID: " + docRef.id)
        // });
        this.props.firestore.collection('WireFrames').add(newObject).then(this.redirectToWireframe)


        // var redirectURL = "/wireFrame/" + redirectId
        // console.log(redirectURL)
        // console.log(redirectId)
        // this.props.history.push('/wireFrame/'+redirectId);
    }

    redirectToWireframe = (docRef) => {
        console.log("docref: ", docRef)
        console.log("docref id: ", docRef.id)
        return <Redirect to={"/wireFrame/", docRef.id} />
        // this.props.history.push("/wireFrame/",docRef.id);
    }

    updateTimeStamp = (id) =>{
        this.props.firestore.collection('WireFrames').doc(id).update({timestamp:this.props.firestore.FieldValue.serverTimestamp()})
    }


    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }
        // this.props.firestore.collection("todoLists").orderBy("TimeStamp", 'asc')
        

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m4">
                        <WireFrameLinks updateTimeStamp={this.updateTimeStamp} />
                    </div>

                    <div className="col s8">
                        <div className="col s12 banner">
                        WireFramer<br />
                        <div style={{fontSize:'30px'}}>A WireFrame Maker</div>
                        </div>
                        
                        <div className="home_new_list_container">
                                <button className="home_new_list_button" onClick={this.handleNewWireFrame}>
                                    Create a New WireFrame
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'WireFrames',orderBy:['timestamp','desc']},
    ]),
)(HomeScreen);