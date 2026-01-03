const menu = {
	btn: document.querySelector(".mobile-toggle"),
	content: document.querySelector(".nav-mobile-menu")
}
let verify = 0;
menu.btn.addEventListener('click', ()=>{

	if(verify === "0")
	{
		menu.content.classList.add('menu-ative');
		menu.content.classList.remove('nav-mobile-menu');
		verify = "1";
	}
	else
	{
		menu.content.classList.add('nav-mobile-menu');
		menu.content.classList.remove('menu-ative');
		verify = "0";
	}

});