import React, { Component } from 'react'
import Button from 'react-materialize/lib/Button';
var containerimg = require('../../images/container.png');
var labelimg = require('../../images/label.png');
var buttonimg = require('../../images/button.png');
var textfieldimg = require('../../images/textfield.png');
var zoomout = require('../../images/baseline_zoom_out_black_18dp.png');
var zoomin = require('../../images/baseline_zoom_in_black_18dp.png');

export class LeftComponent extends Component {
    
    changeContainerState = () => {
        this.setState({containerState:'on'});
    }

    render() {

        console.log(this.props.containerState)
        return (
            <div>
                <div className="column_border" style={{height:'100%'}}>
                    <div style={{height:'6%'}} className="save_close_border">
                    <span className="left"><img src={zoomin} alt="zoomIn"></img></span>
                    <span className="left"><img src={zoomout} alt="zoomOut"></img></span>
                    <span> </span>
                    <span style={{top:'10%',display:'grid',gridTemplateColumns:'30% 15% 33%'}} className="center">
                        <Button>Save</Button>
                        <span> </span>
                        <Button>Close</Button>
                    </span>
                    </div>
                    <br></br>
                    <img style={{width:'60%',height:'15%'}} src={containerimg} alt="container" onDoubleClick={this.changeContainerState}></img>
                    <div style={{fontWeight:'bold'}} >Container</div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>Prompt for input:</div>
                    <img style={{width:'24%',height:'4%'}} src={labelimg} alt="label"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img style={{width:'60%',height:'6%'}} src={buttonimg} alt="button"></img>
                    <div style={{fontWeight:'bold'}} >Button</div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img style={{width:'80%',height:'6%'}} src={textfieldimg} alt="textfield"></img>
                    <div style={{fontWeight:'bold'}} >Textfield</div>
                </div>
            </div>
        )
    }
}

export default LeftComponent
