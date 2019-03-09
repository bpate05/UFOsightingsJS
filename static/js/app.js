// Assign data.js to a variable ufoSightings
var ufoSightings = data;

// Select the filter table button and assign to a variable
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");
var clicked = "n";  

// function to initially load data onto webpage
function buildTable(dataArray) {
    // clear tbody to allow for new dataArray, filtered or unfiltered
    tbody.html("");

    // function to iterate through the data set
    dataArray.forEach((dataRow) => {

        // Append a row to the table body
        var row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell
        Object.entries(dataRow).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);   
  });
});
};

// // Function to filter table based on date inputs
submit.on("click", function() {

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select date input element
    var dateInput = d3.select("#datetime");

    // Get the value property of the date input
    var dateValue = dateInput.property("value");

    // Select state input element
    var stateInput = d3.select("#state");

    // Get the value property of the state input
    var stateValue = stateInput.property("value");

    // Select the shape input element
    var shapeInput = d3.select("#shape");

    // Get the value property of the shape input
    var shapeValue = shapeInput.property("value");

    printedData = ufoSightings;

    // if statements that filter depending whether given field is empty or filled
    if (dateValue != "") {
        printedData = printedData.filter(sighting => sighting.datetime === dateValue);
    }
    if (stateValue != "") {
        printedData = printedData.filter(sighting=> sighting.state===stateValue);
    }
    if (shapeValue != "") {
        printedData = printedData.filter(sighting=>sighting.shape===shapeValue);
    }

    // change clicked to y
    clicked = "y";

    // boolean logic to use filtered or unfiltered data for buildTable function
    if (clicked === "y") {
        console.log("filtered data");
        printedData = printedData;
    }
    else {
        printedData = ufoSightings;
    }
    tbody.html("");
    buildTable(printedData);
});

// build initial table when page is opened
if (clicked === 'y') {
    console.log("filtered data");
    printedData = printedData;
    }
  else {
    console.log("basic data");
    printedData = ufoSightings;
    }
  tbody.html("");
  buildTable(printedData);


//   populate lists with states and shapes

// var allShapes = []
// var allStates = []

// for (var i = 0; i < ufoSightings.length; i++) {
//     var obj = ufoSightings[i];
//     allShapes.push(obj.shape);
//     allStates.push(obj.state);
// }
// // remove duplicates from state and shape list to get only unique elements
// var uniqueShapes = [...new Set(allShapes)]
// var uniqueStates = [...new Set(allStates)]
// console.log(uniqueShapes);
// console.log(uniqueStates);


// var select = document.getElementById("selectState"); 

// // append unique states to option dropdown menu
// for(var i = 0; i < uniqueStates.length; i++) {
//     var state = uniqueStates[i];
//     var el = document.createElement("option");
//     el.textContent = state;
//     el.value = state;
//     select.appendChild(el);
// }​ 