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


/**
 *  add event listener to a group of buttuns
 */
var cpfValue = 3;
function setCpfValue(newCpf)
{
  cpfValue = newCpf;
}

function httpGet(cpf)
{

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf="+cpf, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log( xmlHttp.responseText);
    return xmlHttp.responseText;
}
document.addEventListener('DOMContentLoaded', function () {
  //console.log(document.querySelector('button'));
  //document.querySelector('button').addEventListener('click', httpGet(cpfValue));
  var requestButton = document.getElementById('RequestJson');

  requestButton.addEventListener("click", function(){
      httpGet(cpfValue);
  });

});



// https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf=3