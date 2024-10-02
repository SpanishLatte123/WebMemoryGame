var arraynum = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
var u=0, bb , cc ,holder, holder2, holder1, q = 0, q1 = 0,match = 0,a,tens = 0,min = 0,score = 0,counter = 7,clicks = 0, y, z,choice, z1, y1, z2,hol,hol2,shufz,marg=0.390625,margy=0.813;

function start(){
  q1++;
  a=setInterval('gettime()',1000);     //timer
}

function gettime(){
  q++;
  if(tens == 5 && q == 10 ){
      min++;
      tens=0;
      q=0;
    }
   if(q == 10){
     tens++;
     q=0;
   }

   document.getElementById('display').innerHTML=min+':'+tens+q;
}
function shufflez(){
  for(var i=0;i<100;i++){
    holder=Math.floor(Math.random()*24);
    holder1=Math.floor(Math.random()*24);

    if(holder!=holder1){
      holder3=arraynum[holder];
      arraynum[holder]=arraynum[holder1];  //swap values
      arraynum[holder1]=holder3;
      i++;
      }
  }
  counter=7;  marg=0.390625;  margy=.813;  u=0;
}


function flip(x){

    if(counter == 1){
      z2=x;
      y=document.getElementById('card'+x);
      y1=document.getElementById('car'+x);
      y1.style.transform='rotateY(180deg)';
      counter=0;
      setTimeout('dismg()',250);

    }

    else if(counter ==2 && x != z2){
        z2=x;
        z=document.getElementById('card'+x);
        z1=document.getElementById('car'+x);
        z1.style.transform='rotateY(180deg)';
        setTimeout('dismg2()',150);
        counter=0;
        setTimeout('check()',600);

    }


    if(counter == 7)
    {
      document.getElementById('play').style.opacity='0';
      document.getElementById('play').style.visibility='hidden';
      shufz=1;
      s = setInterval('spread()',70);
      counter = 3;
    }

 }

function check(){
    if(z.src != y.src){
        z1.style.transform='rotateY(0deg)';
        y1.style.transform='rotateY(0deg)';
        setTimeout('dismg3()',150);

    }
    else if(z.src == y.src){
        anime();
        score+=500;
        document.getElementById('score').innerHTML=score;
        z1.removeAttribute('onclick');
        y1.removeAttribute('onclick');
        z1.style.cursor='auto';
        y1.style.cursor='auto';
        match++;
        if(match == 12){
        clearInterval(a);
      }
    }

}

function anime(){
    y1.style.opacity='.6';
    z1.style.opacity='.6';
    setTimeout('reset()',100);
}
function reset(){
    counter=1;
}

function dismg() {
    y.style.transform='rotateY(180deg)';
     y.src='../PICS/img'+arraynum[z2-1]+'.png';
     counter=2;
}

function dismg2(){
    z.style.transform='rotateY(180deg)';
     z.src='../PICS/img'+arraynum[z2-1]+'.png';
}

function dismg3(){
    z.src='../PICS/logo.png';
    y.src='../PICS/logo.png';
    counter++;
}

function showdivz(t,r){
    t=document.getElementById(t);
    r=document.getElementById(r);
    t.style.visibility='visible';
    r.style.visibility='visible';
    t.style.opacity='1';
    t.style.margin='21.14vh 20%';
}

function backz(f){
  var x3,f3;
    x3=document.getElementById('hide');
    y3=document.getElementById('hideb');
    x3.style.visibility='hidden';
    y3.style.visibility='hidden';
    x3.style.opacity='0';
    x3.style.margin='43.902vh 20%';
    if(f == 1){
      document.getElementsByClassName('newgame')[0].style.visibility='hidden';
      document.getElementsByClassName('newgame')[0].style.opacity='0';
      document.getElementsByClassName('hint')[0].style.visibility='hidden';
      document.getElementsByClassName('hint')[0].style.opacity='0';
      document.getElementsByClassName('score')[0].style.opacity='0';
      document.getElementsByClassName('time')[0].style.opacity='0';
      document.getElementsByClassName('title')[0].style.margin='-.318vh 40%';
    }

}

function stack(){
  shufflez();
  backz(1);q=0;min=0;tens=0;clearInterval(a);document.getElementById('display').innerHTML='0:00';document.getElementById('score').innerHTML='0';
  document.getElementById('play').style.visibility='visible';
  document.getElementById('play').style.opacity='1';
  for(var o = 0,jk; o <= 24; o++)
  {
    jk=o+1;
    hol = document.getElementsByClassName('card')[o];
    hol2 = document.getElementsByClassName('chikucard')[o];
    hol2.src='../PICS/logo.png';
    hol.style.cursor='pointer';
    hol.transition='all .5s ease-in-out';
    hol.setAttribute('onclick','flip('+jk+')')
    hol.style.position='absolute';
    hol.style.opacity='0';
    hol.style.margin='82.92vh 35%';
  }
}
function spread(){
  document.getElementsByClassName('title')[0].style.margin='-.318vh 20%';
  document.getElementById('car'+shufz).style.opacity=1;
  document.getElementById('car'+shufz).style.position='absolute';
  document.getElementById('car'+shufz).style.margin=margy+'vh '+marg+'vw';
  shufz++;
  marg+=9.6875;
  u++;
  if(u == 8){
    margy+=26.504;
    marg=0.390625;
  }
  if(u == 16){
    margy+=26.504;
    marg=0.390625;
  }
  if(u == 24){
    counter=1;
    clearInterval(s);
    start();
    document.getElementsByClassName('newgame')[0].style.visibility='visible';
    document.getElementsByClassName('newgame')[0].style.opacity='1'
    document.getElementsByClassName('hint')[0].style.visibility='visible';
    document.getElementsByClassName('hint')[0].style.opacity='1'
    document.getElementsByClassName('score')[0].style.opacity='1';
    document.getElementsByClassName('time')[0].style.opacity='1';
  }
}
