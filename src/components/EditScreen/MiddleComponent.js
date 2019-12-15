import React, { Component } from 'react'
import { Rnd } from 'react-rnd';
import Textfield from './Textfield';
import Container from './Container';
import Label from './Label';
import SampleButton from './SampleButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

export class MiddleComponent extends Component {


    unSelectCurrentItem = (e) => {
        // e.stopPropagation();
        e.stopPropagation();
        console.log("UNSELECT ITEM")
        // this.props.item = null;
    }

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
        
        // if((this.props.wireFrame===undefined)){
        //     console.log("Idontknow")
        // }
        // else{
            var wireFrameItems = this.props.wireFrame.items;
        // }
        
        const selectNewItem = (item,setCurrentItem) => {
            switch (item.type) {
                case "Container":
                    return <Container currentItem={this.props.currentItem} item={item} setCurrentItem={setCurrentItem} ></Container>;
                case "Textfield":
                    return <Textfield currentItem={this.props.currentItem} item={item} setCurrentItem={setCurrentItem}></Textfield>;
                case "Label":
                    return <Label currentItem={this.props.currentItem} item={item} setCurrentItem={setCurrentItem}></Label>;
                default:
                    return <SampleButton currentItem={this.props.currentItem} item={item} setCurrentItem={setCurrentItem}></SampleButton>;
            }
            
        }

        
//style={{height:'100%'} }
// <div></div>
        console.log(this.props.wireFrame)
        return (
            <div className="canvas_border" >
                <div style={{transform:"scale(" + (this.props.wireFrame.zoom) + ")"}} onClick={(e) => this.unSelectCurrentItem(e)}>MY FUCKING CANVAS
                    {this.props.wireFrame.items && this.props.wireFrame.items.map(item => 
                        selectNewItem(item,this.props.setCurrentItem)
                    )}
                </div>
            </div>
        )

        
    }
}

// const mapStateToProps = (state) => {
//     return {
//         WireFrames: state.firestore.ordered.WireFrames,
//         auth: state.firebase.auth,
//     };
// };

// export default compose(connect(mapStateToProps))(MiddleComponent);
export default MiddleComponent;

// item.type==="Container"?<Container item={item} setCurrentItem={this.props.setCurrentItem} ></Container>:
//                         item.type==="Textfield"?<Textfield item={item} setCurrentItem={this.props.setCurrentItem}></Textfield>:
//                         item.type==="Label"?<Label item={item} setCurrentItem={this.props.setCurrentItem}></Label>:
//                         <SampleButton item={item} setCurrentItem={this.props.setCurrentItem}></SampleButton>


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