import React from "react";
import Spinner from "../Spinner/spinner";
import ApplicationDeleteDialog from "./ApplicationDeleteDialog";
import ApplicationTable from "./ApplicationTable";

export default function ApplicationRender(props) {
  let { applicationData } = props;
  if (applicationData.requestPending) {
    return <Spinner></Spinner>;
  } else if (applicationData.openDeletePopup) {
    return <ApplicationDeleteDialog {...props} />;
  } else if (applicationData.requestSuccessful) {
    return <ApplicationTable {...props}></ApplicationTable>;
  }
  return <div>Something Went Wrong :(</div>;
}
