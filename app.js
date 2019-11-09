window.onload = () => {
    let btn = document.getElementById("searchBttn");
    btn.onclick = () => {
        fetch("superheroes.php")
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}