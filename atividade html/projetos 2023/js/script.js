var pic = document.getElementById("imagem");

pic.addEventListener('click',()=>{
	
	let foto
	
	foto = Math.round(Math.random() * 10) + 1;
	
	pic.setAttribute("src","imagem/" + foto + ".png");
	
});