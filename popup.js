// loadstart: 0 bytes transferred
// progress: 80454 bytes transferred
// load: 80454 bytes transferred
// loadend: 80454 bytes transferred

console.log("begin");
let inpFileElement = document.querySelector(".inputFile");
let password = document.querySelector(".inpPass");
let subBtn = document.querySelector(".subBtn");
let result = document.querySelector(".result");
let fileContent ="";
let encryptedFile = "";
let flag = false;
inpFileElement.addEventListener("input",(e)=>{
  let reader = new FileReader();
  reader.readAsText(e.target.files[0]);

  reader.addEventListener("progress",(e)=>{
    console.log("reading file");
  })
  reader.addEventListener("loadend",(e)=>{
    console.log("read complete");
    flag=true;
    fileContent+=e.target.result;
  })
});

subBtn.addEventListener("click",(e)=>{
  if(password.value===""){
    alert("Enter a valid password");
    return;
  }
  if(!inpFileElement.files[0]){
    alert("No file Selected");  
    return;
  }
  if(flag){
    encryptedFile+= sjcl.encrypt(password.value,fileContent);
    result.value = encryptedFile;
  }
  else{
    alert("please wait while file is being read");
  }
});