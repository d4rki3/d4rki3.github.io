
function dataHora(){
	var dia = new Date().getDate();
	var mes = new Date().getMonth() +1;
	var ano = new Date().getFullYear();
	
	if (dia < 10){ dia = "0" + dia;};
	if (mes < 10){mes = "0" + mes;}
	
	var hh = new Date().getHours();
	var mm = new Date().getMinutes();
	var ss = new Date().getSeconds();
	
	if (ss < 10){ ss = "0" + ss;};
	if (mm < 10){mm = "0" + mm;}
	if (hh < 10){hh = "0" + hh;}
	
	var data = dia +"/"+ mes +"/"+ ano;
	var hora = hh + ":" + mm + ":" + ss;
	
	document.getElementById('data').innerHTML = data +"&nbsp"+ hora;
	setTimeout("dataHora('tmp')", 1000);}

dataHora();