 function addNewWEField(){

    //create one textarea tag with some specification as given below.
let newNode=document.createElement('textarea');
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("row",3);
newNode.setAttribute('placeholder','Enter Here')

//get object of textarea
let weOb=document.getElementById('we');

//get object of Add Button so we add element before this button.
let weAddButtonOb= document.getElementById('weAddButton');

weOb.insertBefore(newNode,weAddButtonOb);
 }


 function acadmicQual(){
      //create one textarea tag with some specification as given below.
let newNode=document.createElement('textarea');
newNode.classList.add("form-control");
newNode.classList.add("eqField");
newNode.classList.add("mt-2");
newNode.setAttribute("row",3);
newNode.setAttribute('placeholder','Enter Here')

let AqOb=document.getElementById('Aq');
let acadmicButtonOb=document.getElementById('acadmicButton');

AqOb.insertBefore(newNode,acadmicButtonOb);

 }

 //generating CV
 function generateCV()
 {
console.log('hello')
//long way
let nameField=document.getElementById('nameField').value
let nameT1=document.getElementById('nameT');
nameT1.innerHTML=nameField;

//short way
document.getElementById('nameT2').innerHTML=nameField;

//contact
document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

//address
document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

//Facebook Link
document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;

//LinkedIn
document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;

//instagram
document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;

//Objective
document.getElementById('objectiveT').innerHTML=document.getElementById('ObjectiveField').value;

//Very imp : Work Experience because it change dynamically when u add
let wes= document.getElementsByClassName('weField');
console.log(wes)
let str="";
for(let e of wes)
{
    str=str+`<li> ${e.value} </li>`
}
document.getElementById('weT').innerHTML= str;

///Very imp : academic Qualification because it change dynamically when u add
let eqs= document.getElementsByClassName('eqField');
let str1="";
for(let e of eqs)
{
    str1=str1+`<li> ${e.value} </li>`
}
document.getElementById('aqT').innerHTML= str1;


document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';

 }

 function printCV()
 {
     window.print();
 }