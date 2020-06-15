(function(){
  let inpFileElement0 = document.querySelector(".inputFile0");
  let password0 = document.querySelector(".inpPass0");
  let subBtn0 = document.querySelector(".subBtn0");
  let result0 = document.querySelector(".result0");
  let fileContent0 ="";
  let encryptedFile0 = "";
  let flag0 = false;
  inpFileElement0.addEventListener("input",(e)=>{
    let reader0 = new FileReader();
    
    reader0.addEventListener("progress",(e)=>{
      console.log("reading file");
    })
    reader0.addEventListener("loadend",(e)=>{
      console.log("read complete");
      flag0=true;
      fileContent0+=e.target.result;
    })
    reader0.readAsText(e.target.files[0]);

  });
  
  subBtn0.addEventListener("click",(e)=>{
    if(password0.value===""){
    alert("Enter a valid password0");
    return;
  }
  if(!inpFileElement0.files[0]){
    alert("No file Selected");  
    return;
  }
  if(flag0){
    encryptedFile0+= sjcl.encrypt(password0.value,fileContent0);
    result0.value = encryptedFile0;
  }
  else{
    alert("please wait while file is being read");
  }
});





////////////////////////////////////////////////////////////////////////////////

let inpFileElement1 = document.querySelector(".inputFile1");
let password1 = document.querySelector(".inpPass1");
let subBtn1 = document.querySelector(".subBtn1");
let result1 = document.querySelector(".result1");
let fileContent1 ="";
let decryptedFile1 = "";
let flag1 = false;
inpFileElement1.addEventListener("input",(e)=>{
  let reader1 = new FileReader();
  
  reader1.addEventListener("progress",(e)=>{
    console.log("reading file");
  })
  reader1.addEventListener("loadend",(e)=>{
    console.log("read complete");
    flag1=true;
    fileContent1+=e.target.result
  })
  reader1.readAsText(e.target.files[0]);
});

subBtn1.addEventListener("click",(e)=>{
  if(password1.value===""){
  alert("Enter a valid password1");
  return;
};
if(!inpFileElement1.files[0]){
  alert("No file Selected");  
  return;
}
if(flag1){
  decryptedFile1+= sjcl.encrypt(password1.value,fileContent1);
  result1.value = decryptedFile1;
}
else{
  alert("please wait while file is being read");
}
});


})();