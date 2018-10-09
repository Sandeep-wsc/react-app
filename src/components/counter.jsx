import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:0,
        imageUrl:'https://picsum.photos/300'

    };
    styles=
    {
        fontSize:60,
        
        
    };
    render() { 
        
        return (

            <React.Fragment>
            <img src={this.state.imageUrl} alt=""/>
            <span className="badge badge-primary m-2">{this.formatCount()}</span>
            <button class="btn btn-primary">Increment</button>
            <button class="btn btn-primary">Increment</button>
            <button class="btn btn-danger">Increment</button>
            <button class="btn btn-success">Increment</button>
            <button class="btn btn-warning">Increment</button>
            <button class="btn btn-info">Increment</button>
            <div className="container  jumbotron">
                <div className="row">
                    <div className="col-lg-4">
                       <h1 style={this.styles}>Hello</h1>
                    </div>
                    <div className="col-lg-4">
                    <h1>Hello</h1>
                    </div>
                    <div className="col-lg-4">
                    <h1>Hello</h1>
                    </div>
                </div>
            </div>
            <div className="container  jumbotron">
                <div className="row">
                    <div className="col-lg-4">
                       <h1>Hello</h1>
                    </div>
                    <div className="col-lg-4">
                    <h1>Hello</h1>
                    </div>
                    <div className="col-lg-4">
                    <h1>Hello</h1>
                    </div>
                </div>
            </div>
            
             </React.Fragment>
        );
       
    }
    formatCount()
    {
        return this.state.count===0 ? <h1>Zero</h1> : this.state.count;
    }
        
        
}
 
export default Counter;