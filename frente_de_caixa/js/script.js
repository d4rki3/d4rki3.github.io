
function dataHora(){
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
			
	document.getElementById('dataHora').innerHTML = data +"\t"+ tempo;
	setTimeout("dataHora()", 1000);}
dataHora();

function codPro(){
	var vcod = document.getElementById('cod').value;
	if(vcod == 1){
		cod.value = 0;
		val.value = 20;
		qua.value = 1;
	}else if(vcod == 2){
		cod.value = 0;
		val.value = 30;
		qua.value = 1;
	}else if(vcod == 3){
		cod.value = 0;
		val.value = 40;
		qua.value = 1;
	}else if(vcod == 4){
		cod.value = 0;
		val.value = 40;
		qua.value = 1;
	}else if(vcod == 5){
		cod.value = 0;
		val.value = 50;
		qua.value = 1;
	}else if(vcod == 6){
		cod.value = 0;
		val.value = 60;
		qua.value = 1;
	}else if(vcod == 7){
		cod.value = 0;
		val.value = 50;
		qua.value = 1;
	}else if(vcod == 8){
		cod.value = 0;
		val.value = 60;
		qua.value = 1;
	}else if(vcod == 9){
		cod.value = 0;
		val.value = 70;
		qua.value = 1;
	}
	setTimeout("codPro()", 1000);	
}
codPro();

function calcTotal(){
	var vval = document.getElementById('val').value;
	var vqua = document.getElementById('qua').value;
	//var vtot = document.getElementById('tot').value;
	
	var ctot = vval * vqua;
	var ctotd = parseFloat(ctot).toFixed(2);
	
	document.getElementById('tot').innerHTML = ctotd;
	setTimeout("calcTotal()", 1000);
}
calcTotal();

function inserir(){
	var vval = document.getElementById('val').value;
	var vqua = document.getElementById('qua').value;
	
	var vvald = parseFloat(vval).toFixed(2);
	
	var ctot = vval * vqua;
	var ctotd = parseFloat(ctot).toFixed(2);
	
	if(vvald < 9){vvald = "0" + vvald;}
	if(vqua < 9){vqua = "0" + vqua;}
	if(ctotd < 9){ctotd = "0" + ctotd;}
	if(ctotd < 99){ctotd = "0" + ctotd;}
	
	var newItem = document.createElement("li");
	var textnode = document.createTextNode(vvald+" "+vqua+" "+ctotd);
	newItem.appendChild(textnode);
	var list = document.getElementById("item");
	list.insertBefore(newItem, list.childNodes[0]);
	
	val.value = 0;
	qua.value = 0;
	totalComp(ctotd);
	}

var totnov = 0;
function totalComp(x){
	totnov = parseFloat(x) + parseFloat(totnov);
	totnovd = parseFloat(totnov).toFixed(2);
	
	document.getElementById('idtotal').innerHTML = totnovd;
}

function cancelar(){
	//cod.value = 0;
	val.value = 0;
	qua.value = 0;
	//tot.value = 0;
	}
