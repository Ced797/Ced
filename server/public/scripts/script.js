let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
 // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 /* for (i = 0; i < dots.length; i++) {
   // dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";  
 // dots[slideIndex-1].className += " active";
}



function score(){
	
	let total = 0;
	
	if(document.getElementById("q1").checked == true){
	total += parseInt(document.getElementById('q1').value);	
	}
	if(document.getElementById('q1a').checked == true){
	total += parseInt(document.getElementById('q1a').value);	
	}
	if(document.getElementById('q1b').checked == true){
	total += parseInt(document.getElementById('q1a').value);	
	}
	//////////////////////////////////////////////
	//////////////////////////////////////////////
	if(document.getElementById('q2').checked == true){
	total += parseInt(document.getElementById('q2').value);	
	}
	if(document.getElementById('q2a').checked == true){
	total += parseInt(document.getElementById('q2a').value);	
	}
	if(document.getElementById('q2b').checked == true){
	total += parseInt(document.getElementById('q2b').value);	
	}
	//////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	if(document.getElementById('q3').checked == true){
	total += parseInt(document.getElementById('32').value);	
	}
	if(document.getElementById('q3a').checked == true){
	total += parseInt(document.getElementById('q3a').value);	
	}
	if(document.getElementById('q3b').checked == true){
	total += parseInt(document.getElementById('q3b').value);	
	}
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	if(document.getElementById('q4').checked == true){
	total += parseInt(document.getElementById('q4').value);	
	}
	if(document.getElementById('q4a').checked == true){
	total += parseInt(document.getElementById('q4a').value);	
	}
	if(document.getElementById('q4b').checked == true){
	total += parseInt(document.getElementById('q4b').value);	
	}
	///////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////
	if(document.getElementById('q5').checked == true){
	total += parseInt(document.getElementById('q5').value);	
	}
	if(document.getElementById('q5a').checked == true){
	total += parseInt(document.getElementById('q5a').value);	
	}
	if(document.getElementById('q5b').checked == true){
	total += parseInt(document.getElementById('q5b').value);	
	}
	///////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////
	if(document.getElementById('q6').checked == true){
	total += parseInt(document.getElementById('q6').value);	
	}
	if(document.getElementById('q6a').checked == true){
	total += parseInt(document.getElementById('q6a').value);	
	}
	if(document.getElementById('q6b').checked == true){
	total += parseInt(document.getElementById('q6b').value);	
	}
	///////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////
	alert(total);
}
	

