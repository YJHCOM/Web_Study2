
function clock()
{
	var dat_time = new Date();
	var hour = dat_time.getHours();
	var min= dat_time.getMinutes();
	var sec =  dat_time.getSeconds();
	var year= dat_time.getFullYear();
	var month = dat_time.getMonth()+1;
	
	var date = dat_time.getDate();
	
	document.getElementById("time").innerHTML = hour + ":"+min+":"+sec;
	document.getElementById("date").innerHTML = year+"년" +month+"월"+date+"일";
}

window.onload=function()
{
	clock();
	setInterval(clock,1000);
}