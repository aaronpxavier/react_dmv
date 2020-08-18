import React, { Component } from "react";
import { connect } from "react-redux";
import { getApplications } from "../../Redux/Actions/applicationActions";
import { USER_TOKEN_KEY, DYN_TOKEN_KEY } from "../../Constants/sessionKeys";

class Applications extends Component {
  componentDidMount() {
    console.log("Props 22222222222" + this.props.getApplications());
    console.log(
      "Applications XXXXXXX" + this.props.value[0].teamtwo_applicationname
    );
    let config = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem(DYN_TOKEN_KEY),
      },
    };

    fetch(
      "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value",
      config
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Work with JSON data here
        console.log(
          "Getting data...>>>>" + data.value[0].teamtwo_applicationname
        );
      });
  }

  render() {
    // const applicationItems = this.props.applications.map((application) => (
    //   <div key={application.id}></div>
    // ));
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
const mapStateToProps = (state) => ({
  applications: state.applications.applications,
});
export default connect(mapStateToProps, { getApplications })(Applications);
//export default Applications;
