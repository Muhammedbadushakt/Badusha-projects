let username,password;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("Name").value;
    password = document.getElementById("Password").value;
    window.alert(`${username} updated successfully`)
    console.log(username,password);
}