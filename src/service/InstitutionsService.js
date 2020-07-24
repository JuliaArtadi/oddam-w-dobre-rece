export class InstitutionsService {
    API_URL = "http://localhost:3000";

    getInstitutions = (successCallback, errorCallback) => {
        fetch(`${this.API_URL}/institutions`, {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }
}