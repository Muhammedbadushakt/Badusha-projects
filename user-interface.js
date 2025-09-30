let username,password;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("Name").value;
    password = document.getElementById("Password").value;
    if(username && password){
        window.alert(`${username} updated successfully`)
        window.location.href = "https://muhammedbadushakt.github.io/Rock-Papper-Scissors/"
    }
    console.log(username,password);
}
