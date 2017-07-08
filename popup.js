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
var chooseData = ' '
function setChooseData(newData)
{
  chooseData = newData;
}

function addOption(Data)
{
    var opt = document.createElement("option");
    var select = document.getElementById("data_fild");
  
    opt.value = Data;
    opt.innerHTML = Data;
    select.appendChild(opt);
}
var jsonGet = '';
function httpGet()
{
  cpf = document.getElementById("cpf_value").value;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf="+cpf, false ); // false for synchronous request
  xmlHttp.send( null );
  jsonGet = JSON.parse(xmlHttp.responseText);

  var select = document.getElementById("data_fild");
  while (select.length > 0) 
    select.remove(select.length-1);
    

  console.log(jsonGet);
  
  for (var classTime = 0; classTime < jsonGet.length; classTime++)
    addOption(classTime + '-' +jsonGet[classTime].startTime);
  if( jsonGet.length == 0)
    addOption("CPF Nao encontrado");
  
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

  var requestButton = document.getElementById('RequestJson');
  var requestButtonRaw = document.getElementById('RequestJsonRaw');
  var dates = document.getElementById("data_fild");
  
  dates.addEventListener("click", function() {
    console.log("Selected Data:");
    console.log(dates.value);
    if(dates.value == 'CPF Nao encontrado') return;
    var subDates = dates.value.split("-");
    var indexClass = parseInt(subDates[0]);
    classList = jsonGet[indexClass].students;
    console.log("-- List Of Students --")
    var listInHtml = document.getElementById('stdList');
    
    while (listInHtml.hasChildNodes()) 
      listInHtml.removeChild(listInHtml.firstChild);
    

    //listInHtml.innerHTML = '-- List Of Students --';
    for(var stList = 0 ; stList < classList.length ; stList++ )
    {
      console.log(classList[stList].nome);
      var node = document.createElement("LI");
      var textnode = document.createTextNode(classList[stList].nome);
      node.appendChild(textnode);
      listInHtml.appendChild(node);
    }
    
  });

  addOption("Digite Seu CPF");
  requestButton.addEventListener("click", function(){
      httpGet();
  });

  requestButtonRaw.addEventListener("click", function(){
      httpGetRaw();
  });




});



// https://ess-20171-presence-server.herokuapp.com/lesson/listByCpf?cpf=3