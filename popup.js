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

function addOption(Data)
{
    var opt = document.createElement("option");
    var select = document.getElementById("data_fild");
  
    opt.value = Data;
    opt.innerHTML = Data;
    select.appendChild(opt);
}

function httpGet()
{
  cpf = document.getElementById("cpf_value").value;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf="+cpf, false ); // false for synchronous request
  xmlHttp.send( null );
  var jsonGet = JSON.parse(xmlHttp.responseText);

  var select = document.getElementById("data_fild");
  while (select.length > 0) 
    select.remove(select.length-1);
    

  console.log(jsonGet.length);
  
  for (var classTime = 0; classTime < jsonGet.length; classTime++)
    addOption(jsonGet[classTime].startTime);
  
  
  //return xmlHttp.responseText;
}

function httpGetRaw()
{
  cpf = document.getElementById("cpf_value").value;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf="+cpf, false ); // false for synchronous request
  xmlHttp.send( null );
  
  console.log(xmlHttp.responseText);

  var select = document.getElementById("data_fild");
  while (select.length > 0) 
    select.remove(select.length-1);
    
  //return xmlHttp.responseText;
}


document.addEventListener('DOMContentLoaded', function () {
  //console.log(document.querySelector('button'));
  //document.querySelector('button').addEventListener('click', httpGet(cpfValue));
  var requestButton = document.getElementById('RequestJson');
  var requestButtonRaw = document.getElementById('RequestJsonRaw');

  requestButton.addEventListener("click", function(){
      httpGet();
  });

  requestButtonRaw.addEventListener("click", function(){
      httpGetRaw();
  });


});



// https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf=3