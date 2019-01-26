import React from 'react';

class Hello extends React.Component {

    constructor(props){
        super(props);
        this._onreceive = this._onreceive.bind(this)
    }

    _onreceive(){
       let value = this.props.name + ' is very excellent!!!' + 'His account is ' + this.props.account;
       this.props.onCall(value);
    }

    render(){

        let text = '~~ @ ~~';
       
        return  (
            <div style={this.props.mystyle}>
               
                <h2> My name is {this.props.name}. {text}</h2>
                <h2> I am {this.props.age} year old. {text}</h2>
                <h2> My job is {this.props.job}. {text}</h2>
                <h2> My dream is {this.props.dream}. {text}</h2>
                <h2> My account is {this.props.account} GBP. {text}</h2>

                <button onClick= {this._onreceive}>Click Me</button>
                
            </div>
        );
    }
}

export default Hello;