import React from 'react';

var deleteImg = require('../../images/delete.png')
class WireFrameCard extends React.Component {

    deleteStuff = (e) => {
        e.preventDefault()
        console.log(1)
    }

    // e) => this.props.deleteWireFrame(e,wireFrame)
    // <span style={{paddingLeft:'30px'}}></span><span onClick={console.log('123DELETE')} ><img src={deleteImg}></img></span>
    render() {
        const { wireFrame } = this.props;
        console.log("WireFrameCard, wireFrame.id: " + wireFrame.id);
        return (
            <div>
            <div className="card z-depth-0 todo-list-link">
                <div className="card-content grey-text text-darken-3">
                    <h6>{wireFrame.name}<button onClick={(e) => this.props.deleteWireFrame(e,wireFrame)}>X</button></h6>
                </div>
                <span></span>
            </div>
            
            </div>
            
        );
    }
}
export default WireFrameCard;