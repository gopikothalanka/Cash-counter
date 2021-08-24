let ch = 0;
let bl = 0;
let chg =0;
let Two000 =document.getElementById("two000");
let Five00 = document.getElementById("five00");
let Two00 = document.getElementById("two00");
let One00 = document.getElementById("one00");
let Twenty = document.getElementById("twenty");
let Ten = document.getElementById("ten");
let Five = document.getElementById("five");
let Two = document.getElementById("two");
let One = document.getElementById("one");

const setZeros=()=>{
  Two000.innerHTML='';
  Five00.innerHTML='';
  Two00.innerHTML='';
  One00.innerHTML='';
  Twenty.innerHTML='';
  Ten.innerHTML='';
  Five.innerHTML='';
  Two.innerHTML='';
  One.innerHTML='';
}

const change =()=>{
setZeros();
ch=parseInt(document.getElementById("cash").value);
bl=parseInt(document.getElementById("bill").value);
chg= ch-bl;
document.getElementById("remaining").innerHTML=chg;

  switch (true){

    case(chg>=2000) :
    let x= Math.floor(chg/2000);
    Two000.innerHTML=`:  ${x}`;
    chg= (chg-(x*2000));


    case(chg>=500) :
    let y= Math.floor(chg/500);
    Five00.innerHTML=`:  ${y}`;
    chg=(chg-(y*500));

    case(chg>=200) :
    let z= Math.floor(chg/200);
    Two00.innerHTML=`:  ${z}`;
    chg=(chg-(z*200));

    case(chg>=100) :
    let a= Math.floor(chg/100);
    One00.innerHTML=`:  ${a}`;
    chg=(chg-(a*100));
    
    case(chg>=20) :
    let b= Math.floor(chg/20);
    Twenty.innerHTML=`:  ${b}`;
    chg=(chg-(b*20));

    case(chg>=10) :
    let c= Math.floor(chg/10);
    Ten.innerHTML=`:  ${c}`;
    chg=(chg-(c*10));

    case(chg>=5) :
    let d= Math.floor(chg/5);
    Five.innerHTML=`:  ${d}`;
    chg=(chg-(d*5));

    case(chg>=2) :
    let e= Math.floor(chg/2);
    Two.innerHTML=`:  ${e}`;
    chg=(chg-(e*2));
    
    case(chg>=1) :
    let f= Math.floor(chg/1);
    One.innerHTML=`:  ${f}`;
    chg=(chg-(f*2));
    break;
  }
}

