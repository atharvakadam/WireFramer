import React, { Component } from 'react'
import { connect } from 'react-redux';
import wireFrameJson from './TestWireFrameData.json'
import { getFirestore } from 'redux-firestore';
import { firestore } from 'firebase';
 

export class AdminScreen extends Component {
    render() {
        return (
            <div>
                ADMIN!!!!!
            </div>
        )
    }
}

export default AdminScreen
