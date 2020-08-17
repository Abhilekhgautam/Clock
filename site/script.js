setInterval(setClock,1000);
const secondHand=document.querySelector(".second");
const minuteHand=document.querySelector(".minute");
const hourHand=document.querySelector(".hour");
function setClock(){
	const currentDate=new Date();
	const secondRatio=currentDate.getSeconds()/60;
	const minuteRatio=(secondRatio+currentDate.getMinutes())/60;
	const hourRatio=(minuteRatio+currentDate.getHours())/12;
	setRotation(secondHand,secondRatio);
	setRotation(minuteHand,minuteRatio);
	setRotation(hourHand,hourRatio);
}

function setRotation(element,rotationRatio){
	element.style.setProperty('--rotation',rotationRatio* 360);
}