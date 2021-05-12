// TODO: add code here
function init() {
    //console.log("hello poppet");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            //console.log(json);
            const container = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                //console.log(i);
                let newText = document.createElement("p");
                newText.innerHTML = "test";
                container.appendChild(newText);
            }
        });
    });
}

window.addEventListener("load", init)