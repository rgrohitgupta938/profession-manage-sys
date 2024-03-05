let empArr = [];
let idCounter = 1;

const form = document.getElementById("empForm");
const empList = document.getElementById("employeeList");
const success = document.getElementById("success");
const error = document.getElementById("error");
const count = document.getElementById("empCount");

console.log(submit);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = parseInt(document.getElementById("age").value);
  console.log(name, age, profession);
  if (name.trim() === "" || profession.trim() === "" || isNaN(age)) {
    error.style.display = "block";
    success.style.display = "none";
  } else {
    const employee = {
      id: idCounter++,
      name: name,
      profession: profession,
      age: age,
    };
    empArr.push(employee);
    error.style.display = "none";
    success.style.display = "block";
    console.log(empArr);
    console.log(employee);
    renderEmployee();
    form.reset();
  }
});
function renderEmployee() {
  empList.innerHTML = "";
  count.style.display = empArr.length > 0 ? "none" : "block";
  empArr.map((e) => {
    const li = document.createElement("li");
    const containerDiv = document.createElement("div");
    containerDiv.style.display = "flex";
    containerDiv.style.alignItems = "center";
    containerDiv.innerHTML = `${e.id}.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: ${e.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profession: ${e.profession}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age: ${e.age}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete User";
    deleteButton.addEventListener("click", function () {
      deleteEmployee(e.id);
    });
    li.appendChild(containerDiv);
    li.appendChild(deleteButton);
    empList.appendChild(li);
  });
}
function deleteEmployee(id) {
  empArr = empArr.filter((e) => e.id !== id);
  success.style.display = "none";
  renderEmployee();
}
