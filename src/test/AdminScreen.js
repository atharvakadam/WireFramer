import React, { Component } from 'react'
import { connect } from 'react-redux';
import wireFrameJson from './TestWireFrameData.json'
import { getFirestore } from 'redux-firestore';
import { firestore } from 'firebase';
 

export class AdminScreen extends Component {
    
    // NOTE, BY KEEPING THE DATABASE PUBLIC YOU CAN
    // DO THIS ANY TIME YOU LIKE WITHOUT HAVING
    // TO LOG IN
    handleClear = () => {
        const fireStore = getFirestore();
        fireStore.collection('WireFrames').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting " + doc.id);
                fireStore.collection('WireFrames').doc(doc.id).delete();
            })
        });
    }

    handleReset = () => {
        const fireStore = getFirestore();
        wireFrameJson.WireFrames.forEach(wireFrameJson => {
            fireStore.collection('WireFrames').add({    
                    name: wireFrameJson.name,
                    owner: wireFrameJson.owner,
                    zoom: wireFrameJson.zoom,
                    items: wireFrameJson.items,
                    timestamp: firestore.FieldValue.serverTimestamp()
                }).then(() => {
                    // console.log('timestamp:' + fireStore.FieldValue.serverTimestamp())
                    console.log("DATABASE RESET");
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClear}>Clear Database</button>
                <button onClick={this.handleReset}>Reset Database</button>
            </div>)
    }
}

const mapStateToProps = function (state) {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    };
}

export default connect(mapStateToProps)(AdminScreen);

