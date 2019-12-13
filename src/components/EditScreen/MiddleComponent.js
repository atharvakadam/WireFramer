import React, { Component } from 'react'
import DragResizeContainer from 'react-drag-resize';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Button from 'react-materialize/lib/Button';
import { Resizable, ResizableBox } from 'react-resizable';
import { Rnd } from 'react-rnd';
import TextInput from 'react-materialize'
import TextArea from 'react-materialize'

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
            borderRadius:'5px'
            // background: "#f0f0f0"
          };

        const textarea = {
            
        }  
          
          
        return (
            <div>
                <div className="canvas_border" style={{height:'100%'}}>MY FUCKING CANVAS
                    <Rnd style={style} default={{x: 100,y: 100,width: 216,height: 38}}>
                        <div><input placeholder="Input"></input></div>
                    </Rnd>
                </div>
                
                
            </div>
        )
    }
}

export default MiddleComponent

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