
function checkAll() 
{
	var checkBox = document.querySelectorAll("input[type='checkbox']");
	for (var i = 0; i < checkBox.length; i++) 
	  {
	    checkBox[i].checked = true;
	  }	
}
checkAll()
function AddCheckBox() 
{
    // Get Name
    var studentName = document.getElementById('newName').value
    
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

function checkPersonInTheBox(sel)
{
	var studentName = document.getElementById('newName').value;
	checkPerson(studentName,sel);

}
function checkPerson(name, sel) 
{
  checkboxes = document.getElementsByName(name);
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = sel;
  }
}
AddCheckBox()
