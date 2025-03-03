let name = prompt("Enter Your Name:", "");
while (!name) {
    alert("Name is required! Please enter your name.");
    name = prompt("Enter Your Name:", "");
}

let profession = prompt("Enter Your Profession:", "");
while (!profession) {
    alert("Profession is required! Please enter your profession.");
    profession = prompt("Enter Your Profession:", "");
}

document.getElementById("name").innerText = name;
document.getElementById("profession").innerText = profession;

    