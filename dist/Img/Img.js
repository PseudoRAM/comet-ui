var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import "./Img.css";

const Img = props => React.createElement("img", _extends({
  src: props.src,
  alt: props.alt ? props.alt : ""
}, props, {
  className: !props.draggable ? `no-drag ${props.className}` : props.className
}));

export default Img;