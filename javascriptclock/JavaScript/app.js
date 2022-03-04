const myName = document.getElementById("myName");
const myClock = document.getElementById("myClock");

var you = prompt("Adın ne?");

if (you) {
	myName.innerHTML = you;
	startTime();
}

function startTime() {
	var now = new Date();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	hour = checkTime(hour);
	min = checkTime(min);
	sec = checkTime(sec);

	myClock.innerHTML = `${hour}:${min}:${sec}`;

	setInterval(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
