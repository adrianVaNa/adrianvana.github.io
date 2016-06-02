$(window).scroll(function(){
      if ($(this).scrollTop() > 570) {
          $('#menuPrincipal').addClass('fixed');
      } else {
          $('#menuPrincipal').removeClass('fixed');
      }
  });

$(document).ready(function(){
	//Ir a bio
	$("#abajoMenu").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#bio").offset().top
	    }, 1000);
	});
	$("#menuBio").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#bio").offset().top
	    }, 1000);
	});

	//ir a estudios
	$("#abajoBio").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#estudios").offset().top
	    }, 1000);
	});
	$("#menuEstudios").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#estudios").offset().top
	    }, 1000);
	});

	//ir a habilidades
	$("#abajoEstudios").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#habilidades").offset().top
	    }, 1000);
	});
	$("#menuHabilidades").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#habilidades").offset().top
	    }, 1000);
	});

	//ir a contacto
	$("#abajoHabilidades").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contacto").offset().top
	    }, 1000);
	});
	$("#menuContacto").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contacto").offset().top
	    }, 1000);
	});

	//ir a Extra
	$("#abajoContacto").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#extra").offset().top
	    }, 1000);
	});
	$("#menuExtra").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#extra").offset().top
	    }, 1000);
	});

	//ir a top
	$("#menuTop").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#header").offset().top
	    }, 1000);
	});
});