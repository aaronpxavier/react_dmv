import * as Msal from 'msal';

function _createMSAL() {
    let organizationURI = 'https://mdynamics0077.crm.dynamics.com';
    let tenant = "2df8f3a3-344d-4681-ac70-155db3cbf455"; 
    let clientId = '63f764bc-8595-4c54-a4a1-6353db3ec141';
    let pageUrl = "http://localhost:3000";
    let msalConfig = {
        auth: {
            clientId: clientId,
            redirectUri: pageUrl,
            tenant: tenant,
            endpoints: {orgUri: organizationURI},
            cacheLocation: 'localStorage'
        },
        cache: {
            cacheLocation: "sessionStorage", // This configures where your cache will be stored
            storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
        }
        
    }
    return new Msal.UserAgentApplication(msalConfig);
}

export default function getToken() {
    _createMSAL().loginPopup()
        .then(response => {
            const {idToken}  = response; 
            return idToken.rawIdToken;
        })
        .catch(err => {
            console.error(err);
        });   
}



/**
 * 
 * 
 req.open("GET", 'https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_vehicletitles?$select=_createdby_value,teamtwo_name,teamtwo_vehicle_title_number', true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.setRequestHeader("Authorization", "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imh1Tjk1SXZQZmVocTM0R3pCRFoxR1hHaXJuTSIsImtpZCI6Imh1Tjk1SXZQZmVocTM0R3pCRFoxR1hHaXJuTSJ9.eyJhdWQiOiJodHRwczovL21keW5hbWljMDA3Ny5jcm0uZHluYW1pY3MuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzJkZjhmM2EzLTM0NGQtNDY4MS1hYzcwLTE1NWRiM2NiZjQ1NS8iLCJpYXQiOjE1OTczNDQzNTMsIm5iZiI6MTU5NzM0NDM1MywiZXhwIjoxNTk3MzQ4MjUzLCJhaW8iOiJFMkJnWURoNjltVDQ0b1FOVEQ4VkpoMWNkVk91RXdBPSIsImFwcGlkIjoiYzI1ZWZhMjUtMDZmZS00ZjFiLTg0YTUtMzA2M2UwZDhmYzNjIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMmRmOGYzYTMtMzQ0ZC00NjgxLWFjNzAtMTU1ZGIzY2JmNDU1LyIsIm9pZCI6IjdhNWM5OTQ0LTQ4OGItNDFiYi05YThjLTdmN2NjOTJkYWNmNyIsInN1YiI6IjdhNWM5OTQ0LTQ4OGItNDFiYi05YThjLTdmN2NjOTJkYWNmNyIsInRpZCI6IjJkZjhmM2EzLTM0NGQtNDY4MS1hYzcwLTE1NWRiM2NiZjQ1NSIsInV0aSI6IjlsVkdUYmw2OTBHTmVER3J6V1U1QVEiLCJ2ZXIiOiIxLjAifQ.GgN1BlOnPzX9VDg7yppiCddnS7QqKKHx_MMQYellXyzFyGl5T5afnviY5Ubds7EXx16an6UrK7CQkxTFInVGFYSlHbshCbicVWRqqxDlh2sR054HGhZVyrdpiVY0CATl3Ko3eXJn8uBLO20LwogXKbF5lZHvUt8ywlxu_27WW_eDNJMC3CarQZhbH6f_dWa93SKlKs81kIzzIeJPyzuguOAmYmnYxYwW8bL0afc_CYjkYq8qToIe1PbUOJZO1vhm-pEjWGCCeQPChRv4JoLl5JI4jJiC9ma1fsAotPj6FAnUSAT69uI26rV661D0QA6aJE29hM8LttOXf3W-VrD6QA'); //Replace token with your token value
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var results = JSON.parse(this.response);
            for (var i = 0; i < results.value.length; i++) {
                var _createdby_value = results.value[i]["_createdby_value"];
                var _createdby_value_formatted = results.value[i]["_createdby_value@OData.Community.Display.V1.FormattedValue"];
                var _createdby_value_lookuplogicalname = results.value[i]["_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                var teamtwo_name = results.value[i]["teamtwo_name"];
                var teamtwo_vehicle_title_number = results.value[i]["teamtwo_vehicle_title_number"];
            }
            console.log(results);
        }
 */