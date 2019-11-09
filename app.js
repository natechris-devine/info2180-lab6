let result;
const notFoundError = "There was an issue connecting with superhero.php";
const url = "superheroes.php";
const queryParams = "?query=";
let query = "";

window.onload = () => {
    result = document.getElementById("result");
    let btn = document.getElementById("searchBttn");

    fetch(url)
        .then(response => {
            return response.text();
        })
        .then(data => {            
            result.innerHTML = data;
        })
        .catch(error => {
            //console.log(error);
            result.innerHTML = notFoundError;
        });

    btn.onclick = () => {
        event.preventDefault();
        const srchParam = document.getElementById("heroName").value;
        if (srchParam) {
            query = queryParams + srchParam;
        } else {
            query = "";
        }
        const endpoint = url + query;
        //console.log("Endpoint:" + endpoint);
        fetch(endpoint)
            .then(response => {
                return response.text();
            })
            .then(data => {            
                result.innerHTML = data;
            })
            .catch(error => {
                //console.log(error);
                result.innerHTML = notFoundError;
            });
    }
}