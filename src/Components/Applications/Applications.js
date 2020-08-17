import React, { Component } from "react";
import { connect } from "react-redux";
import { getApplications } from "../../Redux/Actions/applicationActions";

class Applications extends Component {
  componentDidMount() {
    this.props.getApplications();
  }
  render() {
    return <div>Howdy</div>;
  }
}

/*Keep this code here in case we need to switch back to functional component*/
// function Applications(props) {
//   return (
//     <div>
//       <h1>Applications</h1>
//       <ul>
//         <li>App1</li>
//         <li>App2</li>
//         <li>App3</li>
//         <li>App4</li>
//       </ul>
//     </div>
//   );
// }

export default connect(null, { getApplications })(Applications);
