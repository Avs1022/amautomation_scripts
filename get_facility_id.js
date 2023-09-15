
async function get_facility_id(env, company_id, facility_name, email, password) {
    // changing company_id , env , facility_name to lower_case
    env = String(env).toLowerCase();
    company_id = String(company_id).toLowerCase();
    facility_name = String(facility_name).toLowerCase();

    //url_endpoint
    var url = "https://dc-manager-configuration-service";
    var endpoint = `.fourkites.com/api/v1/facility_configuration?company_id=${company_id}`
    if (env !== 'prod') {
        url += `-${env}`
    }
    url += endpoint;
    console.log(url);
    try {
        const credentials = `${email}:${password}`;
        const encodedCredentials = btoa(credentials);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`
            }
        })
        // Check if the request was successful
        if (response.ok) {
            const jsonResponse = await response.json();
            // Process the response data
            return jsonResponse;
        } else {
            // Handle the error
            console.error('Request failed with status:', response.status);
        }
}
get_facility_id('prod','amautomation-','asdfsd').then(()=>{

})

