


// register event handlers and initialize currentNode
function start()
{
	
		
		var button = document.getElementById( "reset" );
         button.addEventListener( "click", growReset, false );
		 var button = document.getElementById( "startGrow" );
         button.addEventListener( "click", startGrow, false );
		if(localStorage.getItem("startGrow")){
		grow();}
} 
//為何不能打()
function growReset()
{
	
	if(localStorage.getItem("startGrow")){
			localStorage.removeItem("previously");
			initialize();
		}
	
}

function startGrow()
{
		if(!localStorage.getItem("startGrow")){
			localStorage.setItem("startGrow","true");
			initialize();
		}
		
		
}

function grow()
{
		var current= new Date().getTime();
		
		if(!localStorage.getItem("previously")){
			localStorage.setItem("previously","true");
			initialize();
			
		}
		else
		{
			var previouslyTime =localStorage.getItem("previouslyTime");
			var previouslyLevelUpTime =localStorage.getItem("previouslyLevelUpTime");
			if((current-previouslyTime)>10000){
				dead();
				
			}else if((current-previouslyLevelUpTime)>1000){//待修正
			growSuccess();
			
				localStorage.setItem("previouslyTime",current);
			}else{
				loadTree();
				
				localStorage.setItem("previouslyTime",current);
			}
			
		}
}


function initialize()
{
		var rank=0;
		localStorage.setItem("rank",rank);
		var current= new Date().getTime();
		localStorage.setItem("previouslyTime",current);
		
		
		loadTree();

		
}


function growSuccess()
{		

		var rank=localStorage.getItem("rank");
		if(rank<=12)rank++;
		localStorage.setItem("rank",rank);
		var current= new Date().getTime();
		localStorage.setItem("previouslyLevelUpTime",current);
		
		loadTree();
}


function dead()
{		
		
		var rank=localStorage.getItem("rank");
		if(rank>=1){

		var treeImage=document.getElementById("treeImage")
		treeImage.setAttribute( "src", "images/dead.jpg" );
		treeImage.setAttribute( "width", "350" );
		}
		
}
function loadTree()
{
		var rank=localStorage.getItem("rank");
		
		//var tree=document.getElementById("tree")
		//tree.innerHTML="rank:"+rank;
		var treeImage=document.getElementById("treeImage")
		treeImage.setAttribute( "src", "images/treeImage"+rank+".jpg" );
		if(rank<=2){
			treeImage.setAttribute( "width", "100" );
		}else if(rank<=4) {
			treeImage.setAttribute( "width", "150" );
	
		}else if(rank<=6) {
			treeImage.setAttribute( "width", "220" );
	
		}else{
			treeImage.setAttribute( "width", "350" );
		}
	
		
}

window.addEventListener( "load", start, false );



