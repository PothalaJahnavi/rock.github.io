// jshint esVersion:6
var yourScore=0;
var opponentScore=0;
var you,opponents;
var selects=["rock","paper","scissors"];
window.onload=()=>{
    for(let i=0;i<3;i++)
    {
        let select=document.createElement("img");
        select.id=selects[i];
        select.src=selects[i]+".jpg";
        select.addEventListener("click",generate);
        document.getElementById("selects").append(select);
    }
}
function generate(){
    // for your choices
    you=this.id;
    document.getElementById("your").src=you+".jpg";
    // for oponent
    opponents=selects[Math.floor(Math.random()*3)];
    document.getElementById("opponent").src=opponents+".jpg";
//    for calculating score
   if(you==opponents)
   {
    yourScore+=1;
    opponentScore+=1;
   }
   else{
    if(you=="rock")
    {
        if(opponents=="paper")
        {
            opponentScore+=1;
        }
        else
        {
           yourScore+=1;
        }
    }
    else if(you=="paper")
    {
        if(opponents=="scissors")
        {
            opponentScore+=1;
        }
        else
        {
           yourScore+=1;
        }
    }
      else
      {
        if(opponents=="rock")
        {
            opponentScore+=1;
        }
        else
        {
           yourScore+=1;
        }
    }
   }
//    console.log(opponentScore);
  document.getElementById("opponent-sc").innerHTML=opponentScore;
  document.getElementById("your-sc").innerHTML=yourScore;
}
