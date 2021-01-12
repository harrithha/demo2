var count=0
function addDetails() {
  location.assign('table.html');
  count++
  var table = document.getElementById("details");
  var row = table.insertRow(count);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);



var fname=document.getElementById('fname').value 
var age=document.getElementById('age').value 
var email=document.getElementById('email').value 
var msg=document.getElementById('msg').value 


cell1.innerHTML=fname;
cell2.innerHTML=gender;
cell3.innerHTML=age;
cell4.innerHTML=email;
cell5.innerHTML=msg;



if(cell1.innerHTML==document.getElementById("name") && cell2.innerHTML==gender && 
cell3.innerHTML==age 
&& cell4.innerHTML==email && cell5.innerHTML==msg){
    alert("Duplicate entires not allowed");
}
}
