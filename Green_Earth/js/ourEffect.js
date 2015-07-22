	
	
	
  
  
  
   $(function() {
	   
	
    $( "img" ).load(function() {
	$( "#friendsShow" ).show( "fold"  );
 
	});
  $( "#friendsShow" ).hide();
  
  
  
    $( "#tree" ).mouseenter(function() {
	$( "#treeShow" ).show( "clip"  );
 
	});
	$( "#treeShow" ).hide();
  
  
  
  if(!localStorage.getItem("startGrow")){
			 $( "#startGrow" ).click(function() {
	$( "#treeArea" ).show( "clip"  );
 
	});
	$( "#treeArea" ).hide();
	
		}
   
	
  
     $( "#qanda" ).mouseenter(function() {
	$( "#qandaShow" ).show( "clip"  );
 
	});
	$( "#qandaShow" ).hide();
	
	$( "#news" ).mouseenter(function() {
	$( "#newsShow" ).show( "clip"  );
 
	});
	$( "#newsShow" ).hide();
  
  
  
  $( "#co2" ).mouseenter(function() {
	$( "#co2Show" ).show( "clip"  );
 
	});
	$( "#co2Show" ).hide();
  
  
  
    
  $( "#postNews" ).mouseenter(function() {
	$( "#postNewsShow" ).show( "clip"  );
 
	});
	$( "#postNewsShow" ).hide();
  

  /*頁面滑動*/
  
	
	$('#top_friends').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#friends').offset().top
			}, 500);
 
		return false;
	});
	$('#top_tree').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#tree').offset().top
			}, 500);
 
		return false;
	});
		$('#top_qanda').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#qanda').offset().top
			}, 500);
 
		return false;
	});
	$('#top_news').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#news').offset().top
			}, 500);
 
		return false;
	});
	$('#top_co2').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#co2').offset().top
			}, 500);
 
		return false;
	});
	
	
 
 

  
  });