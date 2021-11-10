function getCoderData() {
    let coderData = fetch("https://api.github.com/users/claudewill1")
    .then(function (response) { return response.json(); })
      .then(function (coderData) {append(coderData); })
      .catch(function (err) { console.log(err);});
    return coderData
}


function append(coderData) {
    let mainContainer = document.getElementById("coderData");
        let div = document.createElement("div");
        div.innerHTML = coderData.name + " has " + coderData.followers + " followers";
        let img = document.createElement("img");
        img.src = coderData.avatar_url
        img.alt = "Image of " + coderData.name;

        mainContainer.appendChild(div);
        mainContainer.appendChild(img);

}

console.log(coderData)