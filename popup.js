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


function addBand(){
  console.log("BAAAAAAAAAAAAAAAAAAAAAD")
  chrome.tabs.executeScript(null,AddBandCheckBox())
}


/**
 *  add event listener to a group of buttuns
 */

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf=3", false ); // false for synchronous request
    xmlHttp.send( null );
    console.log( xmlHttp.responseText);
    return xmlHttp.responseText;
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', httpGet);
});



// https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf=3