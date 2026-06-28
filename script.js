function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user == "admin" && pass == "1234") {
        window.location = "dashboard.html";
    } else {
        alert("Invalid Login");
    }
}
function logout() {
    window.location = "index.html";
}
function submitComplaint() {

    let name = document.getElementById("name").value;
    let complaint = document.getElementById("complaint").value;

    localStorage.setItem("name", name);
    localStorage.setItem("complaint", complaint);

    alert("Complaint Submitted");
}
function showComplaint() {

    document.getElementById("name").innerHTML =
        localStorage.getItem("name");

    document.getElementById("complaint").innerHTML =
        localStorage.getItem("complaint");
}