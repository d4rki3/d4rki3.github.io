
function calculaResultado(){
	var valor = document.getElementById('valor').value;
	var lucro = document.getElementById('lucro').value;
	var total = valor * lucro / 100;
	
	valDec = parseFloat(valor).toFixed(2);
	totDec = parseFloat(total).toFixed(2);
	
	document.getElementById('r1').innerHTML = "1: investido = "+valDec*1+"; lucro = "+totDec+";";
	document.getElementById('r2').innerHTML = "2: investido = "+valDec*2+"; lucro = "+totDec*2+";";
	document.getElementById('r3').innerHTML = "3: investido = "+valDec*3+"; lucro = "+totDec*3+";";
	document.getElementById('r4').innerHTML = "4: investido = "+valDec*4+"; lucro = "+totDec*4+";";
	document.getElementById('r5').innerHTML = "5: investido = "+valDec*5+"; lucro = "+totDec*5+";";
	
	setTimeout("calculaResultado()", 1000);
}

calculaResultado();