function cria_lab(){
	for (var i=0; i < 24; i++){
		
		if(i <=7 ){
			var x = document.getElementById("lab1");
		}else if(i >= 8 && i <= 15){
			var x = document.getElementById("lab2");
		}else{
			var x = document.getElementById("lab3");}
		
		var elem = document.createElement('label');
		elem.id = "clab"+[i];
		x.appendChild(elem);
		
		var x = document.getElementById("clab"+[i]);
		var t = document.createTextNode(i+1);
		x.appendChild(t);}}
cria_lab()

function cria_butt(){
	for (var i=0; i < 24; i++){
	
		if(i <=7 ){
		var x = document.getElementById("dbutt1");
		}else if(i >= 8 && i <= 15){
		var x = document.getElementById("dbutt2");
		}else{
		var x = document.getElementById("dbutt3");}
		
		//var x = document.getElementById("dbutt1");
		var elem = document.createElement('input');
		elem.setAttribute('type','checkbox');
		elem.id = "cbutt"+[i];
		x.appendChild(elem);
		
		//var x_l = document.getElementById("dbutt1");
		var elem_l = document.createElement('label');
		elem_l.setAttribute('for','cbutt'+i);
		x.appendChild(elem_l);}}
cria_butt()

function cria_ch(){
	var canal = [];
	for (var i=0; i < 24; i++){
	
		if(i <=7 ){
		var x = document.getElementById("ch1");
		}else if(i >= 8 && i <= 15){
		var x = document.getElementById("ch2");
		}else{
		var x = document.getElementById("ch3");}
	
		//var x = document.getElementById("ch1");
		var elem = document.createElement('select');
		elem.text = canal[i];
		elem.value = canal[i];
		elem.id = "inst"+[i];
		x.appendChild(elem);
		cria_inst(i)}}
cria_ch()

function cria_inst(y){
	var inst = [" ","bateria","baixo","guitarra","microfone",
				"teclado","violao","pc","***"];
	for (var i=0; i < inst.length; i++){
		var x = document.getElementById("inst"+y);
		var elem = document.createElement('option');
		elem.text = inst[i];
		elem.value = inst[i];
		elem.id = inst[i];
		x.add(elem);}}