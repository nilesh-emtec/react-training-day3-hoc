import React, { Component } from "react";

export function withStyle(color) {
  return (InputComponent) => {
    class customeStyling extends Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div style={{ background: color || "yellow", padding: 30 }}>
            <InputComponent {...this.props} />
          </div>
        );
      }
    }
    return customeStyling;
  };
}


// function withLogging() {
//   return (InputComponent) => {
//     class customeStyling extends Component {
//       componentDidUpdate(){
//         console.log('componentDidUpdate')
//       }
//       constructor(props) {
//         super(props);
//       }
//       render() {
//         return (
//             <InputComponent {...this.props} />
//         );
//       }
//     }
//     return customeStyling;
//   };
// }

//export withLogging;