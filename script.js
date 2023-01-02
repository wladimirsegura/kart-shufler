var names = [];

function addName() {
  // Get the name and kart number from the input fields
  var name = document.getElementById("name").value;
  var kartNumber = document.getElementById("kartNumber").value;

  // Add the name and kart number to the names array
  names.push({name: name, kartNumber: kartNumber});

  // Clear the input fields
  document.getElementById("name").value = "";
  document.getElementById("kartNumber").value = "";

  // Update the entered names list
  updateEnteredNames();

  // Update the table with the unsorted names
  updateTable();
}

function randomizeKartNumbers() {
  // Generate a list of all possible kart numbers
  var kartNumbers = [];
  for (var i = 0; i < names.length; i++) {
    kartNumbers.push(names[i].kartNumber);
  }

  // Shuffle the kart numbers
  shuffle(kartNumbers);

  // Assign the shuffled kart numbers to the names
  for (var i = 0; i < names.length; i++) {
    names[i].kartNumber = kartNumbers[i];
  }

  // Update the table with the unsorted names
  updateTable();
}

function shuffle(array) {
  // Fisher-Yates shuffle algorithm
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}




function updateEnteredNames() {
  // Get the entered names list element
  var enteredNamesList = document.getElementById("enteredNames");

  // Create a new list item for the name
  var newListItem = document.createElement("li");
  newListItem.innerHTML = names[names.length - 1].name + " - " + names[names.length - 1].kartNumber;

  // Add the new list item to the entered names list
  enteredNamesList.appendChild(newListItem);
}

function updateTable() {
  // Get the table element
  var table = document.getElementById("sortedNames");

  // Clear the existing rows
  while (table.rows.length > 1) {
    table.deleteRow(-1);
  }

  // Add a new row for each name
  for (var i = 0; i < names.length; i++) {
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var kartNumberCell = row.insertCell(1);
    nameCell.innerHTML = names[i].name;
    kartNumberCell.innerHTML = names[i].kartNumber;
  }
}

