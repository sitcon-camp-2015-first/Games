
var  face = new Array(9);
var point=0;
var timeCounter;

function changePic ()
{

    for (var u=1;u<10;u++){
    face[u]=setImage(document.getElementById("pos"+u));


    }


}



 function setImage( hitImg )
         {
            var randomValue = Math.floor( Math.random()*8 + 1 );

        
            hitImg.setAttribute( "src", "img"+randomValue+ ".png" );
            hitImg.setAttribute( "alt", randomValue + " pic" );
            hitImg.setAttribute("weight","50px");
            hitImg.setAttribute("height","50px");
               
             return randomValue;
            
         } // end function setImage

function countPoint(pos)
{

if(face[pos]==4){

point+=50;

displayPoint();
changePic();
clearInterval(timeCounter);
timeCounter= setInterval(changePic, 1000);
}
else if (face[pos]==8){

    clearInterval(timeCounter);
    gameover();

}
else{

point-=50;
displayPoint();
changePic();
clearInterval(timeCounter);
timeCounter= setInterval(changePic, 1000);

}


}

function displayPoint()
{


document.getElementById("pointArea").innerHTML="得分"+point;

}








function load(){


 timeCounter=setInterval(changePic, 1000);

changePic();


}

function gameover(){
    var pause=document.createElement("img");
    pause.setAttribute("src","gameover.png");
    pause.setAttribute("style","top: 0px; left:0px z-index:4; position: related;");
    
            document.getElementById("pos1").appendChild(pause);

}





