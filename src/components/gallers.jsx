import 'normalize.css/normalize.css'
import '../style/apps.scss'

import React from 'react';

let Foo = class {
  constructor() {
    this.y = 21321;
  }

  toString() {
    console.log(this.y)
  }
};

class Bar extends Foo {

}

Bar.aaa = {

}

new Bar().toString();

console.log(Object.getPrototypeOf(Bar) === Foo)


var RefCompent = React.createClass({
  getDefaultProps: function(){
    return {
      name: '子组件'
    }
  },

  componentDidMount: function(){
    console.log('子组件')
  },

  render: function() {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
      )
  }
});

var AppComponent = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Hello React'
    };
  },

  getInitialState: function(){
    return {liked: false, value: 'haha',opacity: 1.0}
  },

  componentDidMount: function() {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 1000);
  },

  componentWillUpdate: function() {
    //console.log('will render');
  },

  componentDidUpdate: function() {
    //console.log('did render');
  },

  handleClick: function() {
    this.refs.myTextInput.focus();
    this.refs.myTextInput.style.border = '1px solid red'
  },

  handleChange: function() {
    this.setState({liked: !this.state.liked})
  },

  handleInputChange: function(e) {
    this.setState({value: e.target.value})
  },

  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    var value = this.state.value;

    return (
    <div className="index">
    <h1 style={{opacity: this.state.opacity}}> { this.props.title } < /h1>;
    <input type="text"  value={value} ref="myTextInput" onChange={this.handleInputChange}/>
    <p>{value}</p>
    <input type="button" value="Focus the text input" onClick={this.handleClick} />
    <p onClick={this.handleChange}>
      You {text} this. Click to toggle.
    </p>
    <RefCompent ref="refName"/>
    </div>
    )
  }
});


export default AppComponent;
