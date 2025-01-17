let head__content = document.querySelector('.head__content');
head__content.innerText = "Задача №1"+"\n"+"Правельная парковка?"

function blockOut(){
	localStorage.setItem('check', 'true');
	window.open('file:///C:/Users/my%20pc/Desktop/Квест/Квест%208%20(в%20разработке)(ПДД)/Code/quiz.html','_self')
}

function timer(){
	let timer;
	let x=60;
	countdown();
	function countdown(){
	document.querySelector('.timer').innerText = x;
	x--
	if (x<0){
		clearTimeout(timer);
	}else{
		timer = setTimeout (countdown, 1000);
	}
	}
}



function rem(){
	let button1 = document.querySelector('.button1').onclick = saveDate1;
	let button2 = document.querySelector('.button2').onclick = saveDate1;
	let button3 = document.querySelector('.button3').onclick = saveDate2;
	let button4 = document.querySelector('.button4').onclick = saveDate4;
	function saveDate1(){
		document.querySelector('.head__content').innerText = "Ответ неправельный!"+'\n'+"Повторная попытка через 60 секунд";
		timer();
		localStorage.setItem('check', 'false')
		document.querySelector('.button1').disabled = true;
		document.querySelector('.button2').disabled = true;
		document.querySelector('.button3').disabled = true;
		document.querySelector('.button4').disabled = true;
		setTimeout(blockOut, 60000)
		
	}
	function saveDate2(){
		document.querySelector('.head__content').innerText = "Ответ неправельный!"+'\n'+"Повторная попытка через 60 секунд";
		timer()
		localStorage.setItem('check', 'false')
		document.querySelector('.button1').disabled = true;
		document.querySelector('.button2').disabled = true;
		document.querySelector('.button3').disabled = true;
		document.querySelector('.button4').disabled = true;
		setTimeout(blockOut, 60000)
	}
	function saveDate3(){
		document.querySelector('.head__content').innerText = "Ответ неправельный!"+'\n'+"Повторная попытка через 60 секунд";
		timer()
		localStorage.setItem('check', 'false')
		document.querySelector('.button1').disabled = true;
		document.querySelector('.button2').disabled = true;
		document.querySelector('.button3').disabled = true;
		document.querySelector('.button4').disabled = true;
		setTimeout(blockOut, 60000)
	}
	function saveDate4(){
		document.querySelector('.button1').disabled = true;
		document.querySelector('.button2').disabled = true;
		document.querySelector('.button3').disabled = true;
		document.querySelector('.button4').disabled = true;
		localStorage.setItem('check', 'true');
		document.querySelector('.head__content').innerText = "Ответ правельный!"+'\n'+"Вот элемент шифра"+'\n'+"1111111"
	}
}


let controlError = localStorage.getItem('check');
if(controlError == 'false'){
	document.querySelector('.head__content').innerText = "Ответ неправельный!"+'\n'+"Повторная попытка через 60 секунд";
	timer()
	document.querySelector('.button1').disabled = true;
	document.querySelector('.button2').disabled = true;
	document.querySelector('.button3').disabled = true;
	document.querySelector('.button4').disabled = true;
	setTimeout(blockOut, 60000)
} else {
	rem()
}


function check(){
	let button1 = document.querySelector('.button1');
	let button2 = document.querySelector('.button2');
	let button3 = document.querySelector('.button3');
	let button4 = document.querySelector('.button4');

	button1.innerText = "Неправельный ответ";
	button2.innerText = "Неправельный ответ";
	button3.innerText = "Неправельный ответ";
	button4.innerText = "Правельный ответ";


	let one = button1.addEventListener('click', function() {
	  button1.style.backgroundColor = "red";
	  
	});
	let two = button2.addEventListener('click', function() {
	  button2.style.backgroundColor = "red"
	});
	let tree =button3.addEventListener('click', function() {
	  button3.style.backgroundColor = "red"
	});
	let foer = button4.addEventListener('click', function() {
	  button4.style.backgroundColor = "green"
	});

	if (foer){
		alert("fklerhie")
	}
}
check()