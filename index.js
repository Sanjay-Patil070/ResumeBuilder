function addNewWEField(){
    let newNode=document.createElement('textarea');

    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','enter here')

    let weOb=document.getElementById('we');
    let weAddBtnOb=document.getElementById('weAddBtn'); 

    weOb.insertBefore(newNode,weAddBtnOb);
}

function addNewAQField(){
    let newNode1=document.createElement('textarea');

    newNode1.classList.add('form-control')
    newNode1.classList.add('eqField')
    newNode1.classList.add('mt-2')
    newNode1.setAttribute('rows',3)
    newNode1.setAttribute('placeholder','enter here')

    let aqOb=document.getElementById('aq');
    let aqAddBtnOb=document.getElementById('aqAddBtn'); 

    aqOb.insertBefore(newNode1,aqAddBtnOb);
}

// generatingCV
function generateCV(){
    // name
    let nameField=document.getElementById('nameField').value

    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField

    document.getElementById('nameT2').innerHTML=nameField

    // contact
   document.getElementById('contactT').innerHTML=document.getElementById('contactField').value

   //address
   document.getElementById('adressT').innerHTML=document.getElementById('AddressField').value

   //Facebook
   document.getElementById('fbT').innerHTML=document.getElementById('FbField').value

   //Instagram ID
   document.getElementById('IT').innerHTML=document.getElementById('InstaField').value

   //LinkedIn Id
   document.getElementById('LT').innerHTML=document.getElementById('LinkedInField').value

   //Objective
   document.getElementById('objT').innerHTML=document.getElementById('ObField').value

   //Work experience

   let weS=document.getElementsByClassName('eqField');
   console.log("wes",weS);

   let str1=" ";
   
   for(let e of weS){
    str1 = str1 + `<li> ${e.value} </li>`;
   }
   document.getElementById('weT').innerHTML=str1;

   //academic qualification
   let aqS=document.getElementsByClassName('weField');
   console.log("wes",aqS);

   let str2=" ";
   
   for(let e of aqS){
    str2 = str2 + `<li> ${e.value} </li>`;
   }
   document.getElementById('aqT').innerHTML=str2;

   document.getElementById('cv-form').style.display='none'

   document.getElementById('cv-template').style.display='block'
}

function printCV(){
    window.print();
}

console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
