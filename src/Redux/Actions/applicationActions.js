import { dynGetCall } from "../../Utilities/dyanamicsAPI"

export function getApplications() {
  return (dispatch) => {
    return dynGetCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=_createdby_value,createdon,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_name,teamtwo_proofofaddress,teamtwo_submitdate,teamtwo_visionscore")
      .then((response) => {
        console.log(response);
        dispatch(getRequestApplications(response.data));
      });
  };
}

export function getRequestApplications(applications) {
  return {
    type: "GET_APPLICATIONS",
    applications: applications,
  };
}
