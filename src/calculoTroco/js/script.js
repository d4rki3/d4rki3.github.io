
function calculaResultado(){
	for(var i=0; i < 101; i++){
	
		var devido = document.getElementById('devido').value;
		var recebido = document.getElementById('recebido').value;
		var troco = recebido - devido;
		
		devDec = parseFloat(devido).toFixed(2);
		
		troDec = parseFloat(troco).toFixed(2);
		
		if(devido){
			if(i==0 && devido >= 1 ){
				troDec = parseFloat(recebido-devido).toFixed(2);
				document.getElementById('n0').innerHTML = 
				"devido: "+devDec+"<br>recebido: "+recebido+"<br>troco: "+(troDec);
			}else if(i==1 && devido >= 1 ){
				troDec = parseFloat(2-devido).toFixed(2);
				document.getElementById('n2').innerHTML = 
					"devido: "+devDec+"<br>recebido: 2.00 <br>troco: "+(troDec);
			}else if(i==5 && devido >= 1){
				troDec = parseFloat(5-devido).toFixed(2);
				document.getElementById('n5').innerHTML = 
					"devido: "+devDec+" <br> recebido: 5.00 <br> troco: "+(troDec);
			}else if(i==10 && devido >= 1){	
				troDec = parseFloat(10-devido).toFixed(2);
				document.getElementById('n10').innerHTML = 
					"devido: "+devDec+" <br> recebido: 10.00 <br> troco: "+(troDec);
			}else if(i==20 && devido >= 1){
				troDec = parseFloat(20-devido).toFixed(2);
				document.getElementById('n20').innerHTML = 
					"devido: "+devDec+" <br> recebido: 20.00 <br> troco: "+troDec;
			}else if(i==50 && devido >= 1){	
				troDec = parseFloat(50-devido).toFixed(2);
				document.getElementById('n50').innerHTML = 
					"devido: "+devDec+" <br> recebido: 50.00 <br> troco: "+(troDec);
			}else if(i==100 && devido >= 1){
				troDec = parseFloat(100-devido).toFixed(2);
				document.getElementById('n100').innerHTML = 
					"devido: "+devDec+" <br> recebido: 100.00 <br> troco: "+(troDec);
			}
		}else{
			 document.getElementById('n0').innerHTML = 
			 	"devido: 0.00<br>recebido: 0.00<br>troco: 0.00";
			document.getElementById('n2').innerHTML = 
				"devido: 0.00<br>recebido: 0.00<br>troco: 0.00";
			document.getElementById('n5').innerHTML = 
				"devido: 0.00<br>recebido: 0.00<br>troco: 0.00";
			document.getElementById('n10').innerHTML = 
				"devido: 0.00<br>recebido: 0.00<br>troco: 0.00";
			document.getElementById('n20').innerHTML = 
				"devido: 0.00<br>recebido: 0.00<br>troco: 0.00";
			document.getElementById('n50').innerHTML = 
				"devido: 0.00<br>recebido: 0.00<br>troco: 0.00";
			document.getElementById('n100').innerHTML = 
				"devido: 0.00<br>recebido: 0.00<br>troco: 0.00";
		}
	}
	setTimeout("calculaResultado()", 1000);
}
calculaResultado();