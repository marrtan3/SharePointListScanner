export async function getData(url) {
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
			"Accept": "application/json; odata=verbose",
			"Content-type": "application/json; odata=verbose"
        }
    });
    let data = await response.json();
    console.log(data.d.results);
    return data.d.results;
}