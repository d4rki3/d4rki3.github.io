
function calculaResultado(){
	for(var i=1; i < 6;i++){
	
	
		var valor = document.getElementById('valor').value;
		var lucro = document.getElementById('lucro').value;
		var total = valor * lucro / 100;
		
		val = valor*i;
		valDec = parseFloat(val).toFixed(2);
		
		tot = total*i;
		totDec = parseFloat(tot).toFixed(2);
		
		//document.getElementById('r1').innerHTML = "1: investido = ";
		document.getElementById('r'+[i]).innerHTML = i+": investido = "+valDec+"; lucro = "+totDec+";";
		
	}
	setTimeout("calculaResultado()", 1000);
}
calculaResultado();
