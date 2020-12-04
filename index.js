let text = document.getElementById('text');
let submit = document.getElementById("submit");
let isogram = document.getElementById('iso');
submit.addEventListener('click', ()=>{
   isogram.innerHTML=text.value ;
   let check = text.value;
   let checkArray = check.split("");//converts the string to an array
   console.log(checkArray.length);
   let setArray = [...new Set(checkArray)]// converting checkarray to setarray. set array will omit repeated strings
   console.log(setArray);
   if(checkArray.length>setArray.length){
       let output = isogram.innerHTML;
       isogram.innerHTML= output+ " is not an isogram";
   }else{
    let output = isogram.innerHTML;
    isogram.innerHTML= output+ " is an isogram";
   }
   text.value="";

   
   
});



  
