// TODO: add code here
function init() {
    //console.log("hello poppet");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            const container = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                
                let astronautDiv = document.createElement("div");
                astronautDiv.classList.add("astronaut");

                /*let bioDiv = document.createElement("div");
                bioDiv.classList.add("bio");*/

                astronautDiv.innerHTML = `
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: </li>
                        </ul>
                    </div>
                    <img class="avatar" src="images/mae-jemison.jpg">
                `;
                container.appendChild(astronautDiv);
                
                /*console.log(i);
                let newText = document.createElement("p");
                newText.innerHTML = "test";
                container.appendChild(newText);*/
            }
        });
    });
}

window.addEventListener("load", init)