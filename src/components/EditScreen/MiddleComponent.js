import React, { Component } from 'react'
import { Rnd } from 'react-rnd';
import Textfield from './Textfield';
import Container from './Container';
import Label from './Label';
import SampleButton from './SampleButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

export class MiddleComponent extends Component {
    render() {
        const layout = [{ key: 'test', x: 0, y: 0, width: 200, height: 100, zIndex: 1 }]
        const canResizable = (isResize) => {
            return { top: isResize, right: isResize, bottom: isResize, left: isResize, topRight: isResize, bottomRight: isResize, bottomLeft: isResize, topLeft: isResize };
        };
        const style = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px black",
            borderRadius:'5px',
            zIndex:'-moz-initial',
            background: "#f0f0f0"
          };

        const textarea = {
            
        }  
        
        console.log(this.props.wireFrame)
        var wireFrameItems = "";
        if((this.props.wireFrame)){
            wireFrameItems =  this.props.wireFrame.items
        }
        
        
        return (
            <div>
                <div className="canvas_border" style={{height:'100%'}}>MY FUCKING CANVAS
                    {wireFrameItems && wireFrameItems.map(item => (
                        item.type==="Container"?<Container></Container>:
                        item.type==="Textfield"?<Textfield></Textfield>:
                        item.type==="Label"?<Label></Label>:
                        <SampleButton></SampleButton>
                    ))}
                    
                </div>
                
                
            </div>
        )

        
    }
}

const mapStateToProps = (state) => {
    return {
        wireFrames: state.firestore.ordered.WireFrames,
        auth: state.firebase.auth,
    };
};

export default compose(connect(mapStateToProps))(MiddleComponent);

// <Container></Container>
//                     <Textfield></Textfield>
//                     <Label></Label>
//                     <SampleButton></SampleButton>


// <Rnd style={style} default={{x: 100,y: 100,width: 216,height: 38}}>
//                         <div><input placeholder="Input"></input></div>
//                     </Rnd>


// <Draggable axis="x"
//                                 handle=".handle"
//                                 defaultPosition={{x: 0, y: 0}}
//                                 position={null}
//                                 grid={[25, 25]}
//                                 scale={1}
//                                 onStart={this.handleStart}
//                                 onDrag={this.handleDrag}
//                                 onStop={this.handleStop}>
//                         <div>
//                             <div className="handle">Drag from here</div>
//                             <div>This readme is really dragging on...</div>
//                         </div>
//                     </Draggable>

// <DragResizeContainer className='resize-container' 
//                                         style={{backgroundColor:'black'}}
//                                         // resizeProps={{ minWidth: 10, minHeight: 10, enable: canResizable(isResize) }} 
//                                         // onDoubleClick={clickScreen} 
//                                         layout={layout} 
//                                         dragProps={{ disabled: false }} 
//                                         // onLayoutChange={onLayoutChange} 
//                                         scale={10}> 
//                         {layout.map((single) => { return ( <div key={single.key} className='child-container size-auto border black '>text test</div>);})}
//                     </DragResizeContainer>
//                     <ResizableBox width={10} height={10} minConstraints={[10, 10]} maxConstraints={[30, 30]}>
//                         <Button>Contents</Button>
//                     </ResizableBox>