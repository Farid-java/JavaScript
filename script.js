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

 var doc = new jsPDF('p','mm','a4');
 function generateCV()
 {
console.log('hello')
//long way
let nameField=document.getElementById('nameField').value
let nameT1=document.getElementById('nameT');
nameT1.innerHTML=nameField;
doc.text(120,30,nameT1.innerText);
//short way
document.getElementById('nameT2').innerHTML=nameField;
doc.text(10,60,document.getElementById('nameT2').innerText);
//contact
document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
doc.text(10,70,document.getElementById('contactT').innerText);
//address
document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
var splitTitle = doc.splitTextToSize(document.getElementById('addressT').innerText, 65);
//doc.text(15, 20, splitTitle);
doc.text(10,80,splitTitle);
let h=doc.getTextDimensions(splitTitle).h;
//console.log( doc.getTextDimensions(splitTitle).h);

//Facebook Link
document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
doc.text(10,100+h,document.getElementById('fbT').innerText);
//LinkedIn
document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;
doc.text(10,110+h,document.getElementById('linkedT').innerText);
//instagram
document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
doc.text(10,120+h,document.getElementById('instaT').innerText);
//Objective
document.getElementById('objectiveT').innerHTML=document.getElementById('ObjectiveField').value;
var splitTitle1 = doc.splitTextToSize(document.getElementById('objectiveT').innerText, 120);
doc.text(80,50,splitTitle1);

//Very imp : Work Experience because it change dynamically when u add
let wes= document.getElementsByClassName('weField');
//console.log(wes)
let str="";
var c="";
for(let e of wes)
{
    str=str+`<li> ${e.value} </li>`
     c=c +` ${doc.getStringUnitWidth(e.value,2)}`;
     
}
console.log(c);
document.getElementById('weT').innerHTML= str;
var exper = doc.splitTextToSize(document.getElementById('weT').innerText, 15);
doc.text(80,90,exper);

///Very imp : academic Qualification because it change dynamically when u add
let eqs= document.getElementsByClassName('eqField');
let str1="";
for(let e of eqs)
{
    str1=str1+`<li> ${e.value} </li>`
 
}
document.getElementById('aqT').innerHTML= str1;

// code for setting image
let fileimg=document.getElementById('imgField').files[0];
console.log(fileimg);
let read=new FileReader();
read.readAsDataURL(fileimg);
console.log(read.result);

//set image to template
read.onloadend=function(){document.getElementById('imgTemplate').src=read.result;};


document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';

 }

 function printCV()
 {
   let document1cc= document.getElementById('cv-template');
  
    
    
    //doc.text(60, 60, 'Hello world!');
//doc.text(20, 30, 'This is client-side Javascript to generate a PDF.');

// Add new page
//doc.addPage();
//doc.text(20, 20, 'Visit CodexWorld.com');

// Save the PDF
doc.save('document.pdf');
      //window.print();
 }

 


//  pdf.setFontSize(20);
// pdf.setFont("times");
// pdf.setFontType("bold");
// pdf.setTextColor(255, 0, 0);
// pdf.text(10,10, 'This is a 20pt Times Bold red string');

// pdf.addImage(base64_source, image format, X, Y, width, height)
//pdf.addImage(agency_logo.src, 'PNG', logo_sizes.centered_x, _y, logo_sizes.w, logo_sizes.h);