import React from "react";

class Input extends React.Component {
  render() {
    const { inputRef, id, label, labelSize, ...others } = this.props;
    const labelClass = `col-sm-${labelSize ? labelSize : 3} col-form-label`;
    return (
      <div className="row mb-3">
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <div className="col-sm">
          {others["rows"] > 1 ? (
            <textarea
              ref={inputRef}
              className="form-control"
              id={id}
              {...others}
            ></textarea>
          ) : (
            <input
              ref={inputRef}
              className="form-control"
              id={id}
              {...others}
            />
          )}
        </div>
      </div>
    );
    // return (
    //     <div className="row mb-3">
    //       <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
    //         User name
    //       </label>
    //       <div className="col-sm">
    //         <input type="text" className="form-control" id="inputEmail3" />
    //       </div>
    //     </div>
    //   );
  }
}

export default Input;

// import React from "react";

// class Input extends React.Component {
//   render() {
//     return (
//       <div className="row mb-3">
//         <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
//           User name
//         </label>
//         <div className="col-sm">
//           <input type="text" className="form-control" id="inputEmail3" />
//         </div>
//       </div>
//     );
//   }
// }
// export default Input;
