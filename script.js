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
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    localStorage.setItem("name", name);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);

    alert("Complaint Submitted Successfully!");

    window.location = "view.html";
}

function displayComplaints() {

    let table = document.getElementById("tableBody");

    table.innerHTML = `
        <tr>
            <td>${localStorage.getItem("name")}</td>
            <td>${localStorage.getItem("title")}</td>
            <td>${localStorage.getItem("description")}</td>
        </tr>
    `;
}
function deleteComplaint() {
    localStorage.removeItem("name");
    localStorage.removeItem("title");
    localStorage.removeItem("description");

    alert("Complaint Deleted!");

    window.location = "complaint.html";
}