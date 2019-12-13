import React, { Component } from 'react'
import Button from 'react-materialize'

export class RightComponent extends Component {
    render() {
        return (
            <div>
                <div className="column_border" style={{height:'100%'}}>
                    <div className="left" style={{fontWeight:'bold', paddingLeft:'30px',paddingTop:'5px'}}>Properties:</div>
                    <br></br>
                    <br></br>
                    <input style={{width:'80%'}} defaultValue={'Submit'}></input>
                    <br></br>
                    <div className="input-field">
                        <span className="left" style={{paddingRight:'50px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Font Size:     </span>
                        <input style={{width:'35%',height:'20px'}} className="top left active" type="number" name="name" id="name" defaultValue={0}/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="input-field">
                        <span className="left" style={{paddingRight:'80px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Background:     </span>
                        <input className="top left active" type="color" name="name" id="name"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="input-field">
                        <span className="left" style={{paddingRight:'73px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Color:     </span>
                        <input className="top left active" type="color" name="color" id="name"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="input-field">
                        <span className="left" style={{paddingRight:'25px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Thickness:     </span>
                        <input style={{width:'18%',height:'20px'}} className="top left active" type="number" name="name" id="name" defaultValue={0}/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="input-field">
                        <span className="left" style={{paddingRight:'50px',paddingLeft:'30px',fontSize:'15px',fontWeight:'bold'}}>Border Radius:     </span>
                        <input style={{width:'18%',height:'20px'}} className="top left active" type="number" name="name" id="name" defaultValue={0}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightComponent
