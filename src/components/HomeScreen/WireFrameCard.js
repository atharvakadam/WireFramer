import React from 'react';

class WireFrameCard extends React.Component {

    render() {
        const { wireFrame } = this.props;
        console.log("WireFrameCard, wireFrame.id: " + wireFrame.id);
        return (
            <div className="card z-depth-0 todo-list-link">
                <div className="card-content grey-text text-darken-3">
                    <span style={{fontSize:'20px'}} className="card-title">{wireFrame.name}</span>
                </div>
            </div>
        );
    }
}
export default WireFrameCard;