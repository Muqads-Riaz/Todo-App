
var list = document.getElementById("list");

function todo(){
var input = document.getElementById("input");
if(input.value != ""){
    var li = document.createElement('li');
var liText = document.createTextNode(input.value);
li.setAttribute("class","listStyle")
li.appendChild(liText);
list.appendChild(li);
}
else{
    alert("Please, Enter a value.");x
}


//Delete Button 
var delbtn = document.createElement('button');
var deltext = document.createTextNode("Delete");
delbtn.appendChild(deltext);
delbtn.setAttribute("class","del-btn")
delbtn.setAttribute("onclick","deleteItem(this)")
li.appendChild(delbtn);

//Edit Button
var editbtn = document.createElement('button');
var editText = document.createTextNode("Edit");
editbtn.appendChild(editText);
editbtn.setAttribute("class", "editButton");
editbtn.setAttribute("onclick","edit(this)");
li.appendChild(editbtn);
input.value = ""
console.log(li)
}

function deleteItem(element){
 element.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = ""
}
function edit(element){
var editValue = prompt("Enter edit text",element.parentNode.firstChild.nodeValue);
element.parentNode.firstChild.nodeValue = editValue;
}