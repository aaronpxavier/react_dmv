import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactsRender from "./ContactsRender";
import * as contactActionCreators from "../../Redux/Actions/dashboardContactActions";
import Spinner from "../Spinner/spinner";

class ContactsContainer extends React.Component {
  componentDidMount() {
    this.props.actions.getContacts();
  }

  render() {
    const { contactsData } = this.props;

    if (contactsData && contactsData.requestSuccessful) {
      return <ContactsRender {...contactsData} />;
    } else {
      return <Spinner></Spinner>;
    }
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    contactsData: state.dashboardContactReducer.contactsData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
