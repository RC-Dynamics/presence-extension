document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://cin.ufpe.br/~robocin/?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);


function InitialMsg() {
  console.log("It is Working!");

}


/**
 * This code start "after" html code definitions
 * Get the element checkPage (a button) and criate a listener for the
 * function of click
 */
window.onload = function() {
  InitialMsg();

  document.getElementById("checkPage").addEventListener("click", function(){
    var status = document.getElementById("checkS").checked;
    if(status == true){
       document.getElementById("checkS").checked = false;
    }
    else{
      document.getElementById("checkS").checked = true;      
    }
  });
  
}
