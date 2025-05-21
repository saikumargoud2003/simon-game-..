let gamseq=[];
let userseq=[];
let btns =["red","yellow","green","purpel"];
  let started = false;
  let level =0;

  let h2 = document.querySelector("h2");

  document.addEventListener("keypress", function (){
    if( started == false){
        console.log("game is started");
        started = true;
        levup();
    }
  });
  function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);

  }

  function levup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    
    let rdn = Math.floor(Math.random()*3);
    let rdncolor = btns[rdn];
    let rndbut = document.querySelector(`.${rdncolor}`);
    gamseq.push(rdncolor);

    btnflash(rndbut);

  }
   function checkAns(indx){
    
    if(gamseq[indx]==userseq[indx]){
      if(userseq.length == userseq.length){
        levup();
      }
    }
    else{
      h2.innerText =`Game over...! plz press any key to restart `
    }
   }
  function btnpress(){
    console.log("btnpressed");
    let bttn = this;
    btnflash(bttn);
    let usercol = bttn.getAttribute("id");
    userseq.push(usercol);
    console.log(usercol);
    checkAns(userseq.length-1);

  }
   let allbtns = document.querySelectorAll(".btn") 
    for(btnss of allbtns){
        btnss.addEventListener("click",btnpress)
    }
   