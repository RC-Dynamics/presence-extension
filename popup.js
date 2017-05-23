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


function updateIcon() {
  console.log("Update");

}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
document.addEventListener("fill_siga", function() {
  console.log("BBBBBBBBBBB");
}