import React,{Component} from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            
        };
        this.increment=this.increment.bind(this);
    }
    increment(){
        // this.state.count++;
       if(this.state.count<this.props.max){
        // this.setState({
            
        //     count:this.state.count+1
        // })
        this.state.count++;
        this.forceUpdate();
    }
    else{
        this.setState({
            count:this.props.max
        })
    }
    }

    decrement(){
        if(this.state.count>this.props.min){
        this.state.count--;
        this.forceUpdate();
        // this.setState({
        //     count:this.state.count-1
        // })
    }
        else{
            this.setState({
                count:this.props.min
            })
        }
        }

    render(){
        
        return (
            <div>
            <h3>Counter Component</h3>
            <button onClick={this.decrement.bind(this)}disabled={this.state.count===this.props.min && !this.props.cycle}>-</button>
            &nbsp;
            {this.state.count}
            &nbsp;
            <button onClick={this.increment.bind(this)}disabled={this.state.count===this.props.max && !this.props.cycle}>+</button>
            </div>
        );
    }
}