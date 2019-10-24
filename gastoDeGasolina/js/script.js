function calc_result(){
	var vvalor = parseFloat(document.getElementById('valor').value);
	var vconsumo = parseFloat(document.getElementById('consumo').value);
	var vdistancia = parseFloat(document.getElementById('distancia').value);
	var vresultado = vdistancia / vconsumo * vvalor;
	if(vresultado){
		document.getElementById('total').innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; Total &nbsp;" + parseFloat(vresultado).toFixed(2);
	}
	else{
		document.getElementById('total').innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; total 00"
	}
}
