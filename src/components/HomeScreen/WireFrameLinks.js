import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WireFrameCard from './WireFrameCard';

class WireFrameLinks extends React.Component {
    render() {
        var wireFrames = this.props.wireFrames;
        // console.log(wireFramesToCheck);
        const wireFramesToCheck = [];
        console.log(this.props.auth)
        
        if (wireFrames!=undefined){
            console.log(wireFrames.length);
            for (let i = 0; i< wireFrames.length;i++){
                if(wireFrames[i].owner === this.props.auth.uid){
                    wireFramesToCheck.push(wireFrames[i])
                }
            }
            wireFrames = wireFramesToCheck;
        }
        

        return (
            <div className="todo-lists section">
                {wireFrames && wireFrames.map(wireFrame => (
                    <Link onClick={() => this.props.updateTimeStamp(wireFrame.id)} to={'/wireFrame/' + wireFrame.id} key={wireFrame.id}>
                        <WireFrameCard wireFrame={wireFrame} />
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wireFrames: state.firestore.ordered.WireFrames,
        auth: state.firebase.auth,
    };
};

export default compose(connect(mapStateToProps))(WireFrameLinks);