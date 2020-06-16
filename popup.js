//Copyright 2019 bitwiseshiftleft
(function(){
  /////////ENCRYPTION
  
  //SELECTOR
  const encryptBlock = document.querySelector(".encrypt");
  const decryptBlock = document.querySelector(".decrypt");
  const encryptSelector = document.querySelector("#encryptSelector");
  const decryptSelector = document.querySelector("#decryptSelector");
  

  //default
  encryptBlock.style.display="block";
  decryptBlock.style.display="none";

  encryptSelector.addEventListener("input",(e)=>{
    if(e.target.value==="enc"){
      encryptBlock.style.display="block";
      decryptBlock.style.display="none";
    }
  });

  decryptSelector.addEventListener("input",(e)=>{
    if(e.target.value==="dec"){
      encryptBlock.style.display="none";
      decryptBlock.style.display="block";
    }
  });


  //Variables
  let inpFileElement0 = document.querySelector(".inputFile0");
  let fileAlternative0 = document.querySelector(".fileAlternative0");
  let password0 = document.querySelector(".inpPass0");
  let subBtn0 = document.querySelector(".subBtn0");
  let result0 = document.querySelector(".result0");
  let resultSave0 = document.querySelector(".resultSave0");
  let resultCopy0 = document.querySelector(".floatingCopyBtn0");
  let toEncrypt0 ="";
  let encryptedFile0 = "";
  let flag0 = false;

  //events
  inpFileElement0.addEventListener("input",(e)=>{
    let reader0 = new FileReader();
    
    reader0.addEventListener("progress",(e)=>{
      console.log("reading file");
    })
    reader0.addEventListener("loadend",(e)=>{
      console.log("read complete");
      toEncrypt0 = e.target.result;
    })
    reader0.readAsText(e.target.files[0]);

  });
  document.addEventListener("input",()=>{
    if(password0.value==="" || (fileAlternative0.value==="" || inpFileElement0.files[0])){
      subBtn0.classList.add("disabled");
      resultSave0.classList.add("disabled");
      resultCopy0.classList.add("hide");
    }
    else{
      subBtn0.classList.remove("disabled");
    }
  });
  subBtn0.addEventListener("click",(e)=>{
    //Validation
    try{
      if(password0.value===""){
      alert("Enter a valid password");
      return;
      }
      if(fileAlternative0.value==="" || inpFileElement0.files[0] ){
        alert("No text provided or file Selected");
        return;
      }
      else{
        if(!inpFileElement0.files[0])
        {
          toEncrypt0 = fileAlternative0.value;
        }
        flag0=true;
      }
      if(flag0){
        //show/hide
        resultSave0.classList.remove("disabled");
        encryptedFile0 = sjcl.encrypt(password0.value,toEncrypt0);
        result0.value = encryptedFile0;
        resultCopy0.classList.remove("hide");


        ///creating a file
        let downloadable0 =  new File([encryptedFile0],"encrypted.txt",{type: "text/plain"});

        resultSave0.setAttribute("href",URL.createObjectURL(downloadable0));
        resultSave0.setAttribute("download","encrypted.txt");
      }
    }
    catch(e){
      console.log(e);
      alert(e);
    }
  });
  resultCopy0.addEventListener("click",()=>{

  })



  ////////DECRYPTION



  //Variables
  let inpFileElement1 = document.querySelector(".inputFile1");
  let fileAlternative1 = document.querySelector(".fileAlternative1");
  let password1 = document.querySelector(".inpPass1");
  let subBtn1 = document.querySelector(".subBtn1");
  let result1 = document.querySelector(".result1");
  let resultSave1 = document.querySelector(".resultSave1");
  let resultCopy1 = document.querySelector(".floatingCopyBtn0");
  let toDecrypt1 ="";
  let decryptedFile1 = "";
  let flag1 = false;

  //events
  inpFileElement1.addEventListener("input",(e)=>{
    let reader1 = new FileReader();
    
    reader1.addEventListener("progress",(e)=>{
      console.log("reading file");
    })
    reader1.addEventListener("loadend",(e)=>{
      console.log("read complete");
      toDecrypt1=e.target.result
    })
    reader1.readAsText(e.target.files[0]);
  });
  document.addEventListener("input",()=>{
    if(password1.value==="" || (fileAlternative1.value==="" || inpFileElement1.files[0])){
      subBtn1.classList.add("disabled");
      resultSave1.classList.add("disabled");
      resultCopy1.classList.add("hide");
    }
    else{
      subBtn1.classList.remove("disabled");
    }
  });
  subBtn1.addEventListener("click",(e)=>{
    //Validation
    try{
      if(password1.value===""){
        alert("Enter a valid password1");
        return;
      };
      if(fileAlternative1.value==="" || inpFileElement1.files[0] ){
        alert("No text provided or file Selected");
        return;
      }
      else{
        if(!inpFileElement1.files[0])
        {
          toDecrypt1 = fileAlternative1.value;
        }
        flag1=true;
      }
      if(flag1){
        //show/hide
        resultSave1.classList.remove("disabled");
        decryptedFile1 = sjcl.decrypt(password1.value,toDecrypt1);
        result1.value = decryptedFile1;
        resultCopy1.classList.remove("hide");


        ///creating a file
        let downloadable1 =  new File([decryptedFile1],"decrypted.txt",{type: "text/plain"});

        resultSave1.setAttribute("href",URL.createObjectURL(downloadable1));
        resultSave1.setAttribute("download","decrypted.txt");
      }
    }
    catch(e){
      console.log(e);
      alert(e);
    }
  });
  resultCopy1.addEventListener("click",()=>{

  })

})();