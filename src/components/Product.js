// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (<div>
  <p>{this.props.name}</p>
  <p>{this.props.producer}</p>
  <p>{this.props.hasWatermark}</p>
  <p>{this.props.colors}</p>
  <p>{this.props.weight}</p>
  </div>)
  }
}

const neededColors = ['white', 'eggshell-white', 'salmon']

Product.defaultProps = {
  hasWatermark: false,
}


function weightRange(props, propName, componentName) {
  let weightCheck = props.weight
  if (!props.weight){
    return new Error ("Weight needs to exist")
  };

  if(typeof weightCheck !== 'number') {
    return new Error ("Weight needs to be a number")
  }
  if (!(weightCheck > 80 && weightCheck < 300)) {
    return new Error (propName + "isn't between 80 and 300");
  }

}


Product.propTypes  = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(neededColors).isRequired,
  weight: function (props, propName, componentName) {
    let weightCheck = props.weight
    if (!props.weight){
      return new Error ("Weight needs to exist")
    };

    if(typeof weightCheck !== 'number') {
      return new Error ("Weight needs to be a number")
    }
    if (!(weightCheck > 80 && weightCheck < 300)) {
      return new Error (propName + "isn't between 80 and 300");
    }
  }

}
