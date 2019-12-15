import React from 'react';

var deleteImg = require('../../images/delete.png')
class WireFrameCard extends React.Component {

    deleteStuff = (e) => {
        e.preventDefault()
        console.log(1)
    }

    render() {
        const { wireFrame } = this.props;
        console.log("WireFrameCard, wireFrame.id: " + wireFrame.id);
        return (
            <div>
            <div className="card z-depth-0 todo-list-link">
                <div className="card-content grey-text text-darken-3">
                    <span style={{fontSize:'20px'}} className="card-title">{wireFrame.name}<img style={{paddingLeft:'50px'}} onClick={(e) => this.deleteStuff} src={deleteImg}></img></span>
                    
                </div>
                <span></span>
            </div>
            
            </div>
            
        );
    }
}
export default WireFrameCard;