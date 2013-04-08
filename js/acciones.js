// JavaScript Document
$(document).ready(function(e)
{
alert ("El Documento Esta Listo")


document.addEventListener("deviceready",function (){
    $('.btn').tap (function (){
		
	var boton=(($(this).attr('class')).split(' '))[1];
	
	switch(boton)
	
	
	  
	{
	case'b1':
	navigator.notification.beep(1);
	break;
	 
	 case'v1':
	 navigator.notification.vibrate(500);
	 break;
	
	case'v2':
	navigator.notification.vibrate(1000);
	break;

	}  
 

  $('#derecha').swiperinght(function(){
	 navigator.notification.alert("deslizo a la derecha",function(){},"practica1","aceptar");
	

}); 

 $('table td').eq(1).text(device.name);
 $('table td').eq(3).text(device.cordova);
 $('table td').eq(5).text(device.platform);
 $('tabla td').eq(7).text(device.version);
 $('tabla td').eq(9).text(device.uuid);
 
   }, false);

 $('#izquierda').swipeleft(function(){
   navigator.notificaion.confirm('¿que desea hacer?', function(option){
  switch(option){
    case 1:
      navigator.notification.beep(1)
   break;
    case 2:
      navigator.notification.vibrate(500);
  } //switch
 }, "practica 1","beep,vibrate,cancelar"); //function confirm
 }); //function swipe
});
});

