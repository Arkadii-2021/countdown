let timeBack = document.getElementById("timer")

function sayHello(num) {
	timeBack.textContent = num;
	if (num > 0) {
		
	setTimeout(sayHello, 1000, --num);

	}
	else if (num === 0) {
		alert('Вы победили в конкурсе!')
	}
};
	
setTimeout(sayHello, 1000, timeBack.textContent);