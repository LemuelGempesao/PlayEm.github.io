const playBtn=document.querySelector("#playBtn");
const games =document.querySelectorAll(".games");
let h1=document.getElementsByTagName('h1');
const logo1=document.querySelector(".Single");
const logo2=document.querySelector(".Multi");



playBtn.addEventListener("click", function () {
   games.forEach((game) => {

    if (game.style.transform==="scale(0.5)" && game.style.pointerEvents==="none"){
        
        game.style.pointerEvents="auto";
        game.style.opacity="1";
        game.style.transform="scale(1)" ;
        
        
        
    }
    else{
        game.style.pointerEvents="none";
        game.style.transform="scale(0.5)";
        game.style.opacity="0";
    }
   });

   
   if (logo1.style.opacity==="1"&&logo2.style.opacity=="1"){
        logo1.style.opacity="0";
        logo2.style.opacity="0";
   }else{
        logo1.style.opacity="1";
        logo2.style.opacity="1";

   }



});

