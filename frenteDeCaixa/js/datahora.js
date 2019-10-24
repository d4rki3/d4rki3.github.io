function hora(){
	var dd = new Date().getDate();
	var mm = new Date().getMonth() +1;
	var aa = new Date().getFullYear();
				
	if (dd < 10){dd = "0" + dd;};
	if (mm < 10){mm = "0" + mm;};
			
	var h = new Date().getHours();
	var m = new Date().getMinutes();
	var s = new Date().getSeconds();
			
	if (s < 10){s = "0" + s;}
	if (m < 10){m = "0" + m;}
	if (h < 10){h = "0" + h;}
			
	var data = dd +"/"+ mm +"/"+ aa;
	tempo = h + ":" + m + ":" + s;
			
	document.getElementById('data_hora').innerHTML = data +"\t"+ tempo;
	setTimeout("hora()", 1000);}
hora();
