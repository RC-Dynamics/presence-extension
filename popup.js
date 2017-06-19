/**
 * Print the current url
 */
chrome.tabs.query({ active: true, lastFocusedWindow: true}, 
    function(array_of_Tabs) { // Since there can only be one active tab in one active window, 
                              //  the array has only one element
      var tab = array_of_Tabs[0];
      var url = tab.url;
      console.log("new Current " + url);

  });

window.onload = function() {
  document.getElementById("pagebutton").addEventListener("click", function(){
    var status = document.getElementById("checkS").checked;
    if(status == true){
       document.getElementById("checkS").checked = false;
    }
    else{
      document.getElementById("checkS").checked = true;      
    }
  });
  
  document.getElementById("Band").addEventListener("click", function(){
    addBand()
  });
  
}


/**
 * Starts a background script if the buttun is clicked.
 *
 * @param  e       { parameter_description }
 */
function startBackgroundScript(e) {
  chrome.tabs.executeScript(null,
    {
      file:"background.js"
    });
  //window.close();
}

function AddBandCheckBox() 
{
    // Get Name
    var studentName = "Band"
    
    // Show the name
    var newName = document.createElement("textName");
    var t = document.createTextNode(studentName);
    newName.appendChild(t);   
    var breakLine = document.createElement("br");

  // Create CheckBox
    var newCheckBox = document.createElement("INPUT");
    newCheckBox.setAttribute("type", "checkbox");   
    newCheckBox.setAttribute("name", studentName);   
    
    var listOfStudents = document.getElementById("ClassRoom");
    listOfStudents.appendChild(newCheckBox);
    listOfStudents.appendChild(newName);
    listOfStudents.appendChild(breakLine);
}

function addBand(){
  console.log("BAAAAAAAAAAAAAAAAAAAAAD")
  chrome.tabs.executeScript(null,AddBandCheckBox())
}


/**
 *  add event listener to a group of buttuns
 */
document.addEventListener('DOMContentLoaded', function () {
  var startButton = document.querySelectorAll('button');
  for (var i = 0; i < 1/*startButton.length*/; i++) {
    startButton[i].addEventListener('click', startBackgroundScript);
  }


});


