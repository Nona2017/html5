function saveStorage(id)
{
	var target = document.getElementById(id);
	var str = target.value;
	sessionStorage.setItem("message",str);
}

funtion loadStorage(id)
{
	var target = document.getElementById(id);
	var msg = sessionStorage.getItem("message");
	target.innerHTML = msg;
}