let va =document.getElementById("abel").innerHTML=0

document.getElementById("increase").onclick=function (){
  document.getElementById("abel").innerHTML=va+=1;
}

document.getElementById("reset").onclick=function (){
    document.getElementById("abel").innerHTML=0;
  }

  document.getElementById("decrease").onclick=function (){
    document.getElementById("abel").innerHTML=va-=1;
  }
  
  document.getElementById("generate").onclick=function (){
 let x=Math.floor(Math.random()*6);
 
    document.getElementById("l1").innerHTML= x;

    let y=Math.floor(Math.random()*6);
    document.getElementById("l2").innerHTML=y;

    let z=Math.floor(Math.random()*6);
    document.getElementById("l3").innerHTML=z;
  }
