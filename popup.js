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

/**
 *  add event listener to a group of buttuns
 */
document.addEventListener('DOMContentLoaded', function () {
  var startButton = document.querySelectorAll('button');
  for (var i = 0; i < startButton.length; i++) {
    startButton[i].addEventListener('click', startBackgroundScript);
  }
});


