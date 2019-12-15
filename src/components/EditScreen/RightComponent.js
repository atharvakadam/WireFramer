import React, { Component } from 'react'
import Button from 'react-materialize'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

export class RightComponent extends Component {


    render() {

        console.log('Current Item:', this.props.currentItem)
        // if(this.props.currentItem!=null){
        //     console.log(1)
            return (
                <div>
                    <div className="column_border" style={{height:'100%'}}>
                        <div className="left" style={{fontWeight:'bold', paddingLeft:'30px',paddingTop:'5px'}}>Properties:</div>
                        <br></br>
                        <br></br>
                        <input style={{width:'80%'}} value={this.props.currentItem?this.props.currentItem.text:'Submit'}></input>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'50px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Font Size:     </span>
                            <input style={{width:'35%',height:'20px'}} className="top left active" type="number" name="name" id="name" value={this.props.currentItem?(this.props.currentItem.fontSize):0}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'80px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Background:     </span>
                            <input className="top left active" type="color" name="name" id="name" value={this.props.currentItem?(this.props.currentItem.backgroundColor):'#d6d6d6'} />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'73px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Color:     </span>
                            <input className="top left active" type="color" name="color" id="name" value={this.props.currentItem?(this.props.currentItem.borderColor):'#d6d6d6'} />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'25px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Thickness:     </span>
                            <input style={{width:'18%',height:'20px'}} className="top left active" type="number" name="name" id="name" value={this.props.currentItem?this.props.currentItem.borderThickness:0}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="input-field">
                            <span className="left" style={{paddingRight:'50px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Radius:     </span>
                            <input style={{width:'18%',height:'20px'}} className="top left active" type="number" name="name" id="name" value={this.props.currentItem?this.props.currentItem.borderRadius:0}/>
                        </div>
                    </div>
                </div>
            );
        // }
        // else{
        //     return(
        //         <div><div className="column_border" style={{height:'100%'}}></div></div>
        //     );
        // }
        // else{
        //     return(
        //         <div>
        //                 <div className="column_border" style={{height:'100%'}}></div>
        //         </div>        
    
        //     )
        // }
        
        
    }
}

// const mapStateToProps = (state) => {
//     return {
//         wireFrames: state.firestore.ordered.WireFrames,
//         auth: state.firebase.auth,
//     };
// };

export default RightComponent;
// compose(connect(mapStateToProps))()