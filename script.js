var title = document.querySelector("#titleId");
var author = document.querySelector("#authorId");
var ISBN = document.querySelector("#ISBNId");
var submitButton = document.querySelector("#submitId");
var form = document.querySelector("#formId");
var tbody = document.querySelector("tbody");
var rowList = document.querySelectorAll("tbody");

//when clicked to submit button
function onSubmit(e) {
  e.preventDefault();
  //checking invalid input fields
  if (title.value === "" || author.value === "" || ISBN.value === "") {
    alert("Please fill all the fields");
  } else {
    //creating elements that will be added to html side
    var tr = document.createElement("tr");
    var tdTitle = document.createElement("td");
    var tdAuthor = document.createElement("td");
    var tdISBN = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    tdISBN.classList.add("lastData");
    //assignin the values of inputs to created elements which will be added to html side
    tdTitle.textContent = form.elements["titleInp"].value;
    tdAuthor.textContent = form.elements["authorInp"].value;
    tdISBN.textContent = form.elements["ISBNInp"].value;
    tdISBN.appendChild(deleteButton);
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdISBN);
    console.log(tr);
    tbody.appendChild(tr);

    clearInputs();
    addedNotification();
  }
}
//to create addedNotification when an <tr> added to table
function addedNotification() {
  var notifyDiv = document.querySelector("#notificationDiv");
  var notification = document.createElement("p");
  notification.textContent = "Book Added!";
  notification.classList.add("notify");
  notifyDiv.appendChild(notification);
  setTimeout(function () {
    notification.remove();
  }, 3000);
}
function removedNotification() {
  var notifyDiv = document.querySelector("#notificationDiv");
  var notification = document.createElement("p");
  notification.textContent = "Book Removed!";
  notification.classList.add("notify");
  notifyDiv.appendChild(notification);
  setTimeout(function () {
    notification.remove();
  }, 3000);
}
//to clear inputfields after the submit
function clearInputs() {
  title.value = "";
  author.value = "";
  ISBN.value = "";
}
//To Remove chosen <tr> by using delete button
rowList.forEach(function (row) {
  row.addEventListener("click", function (e) {
    console.log(e.target.nodeName);
    if (e.target.nodeName == "BUTTON") {
      e.target.parentElement.parentElement.remove();
      removedNotification();
    }
  });
});

form.addEventListener("submit", onSubmit);
