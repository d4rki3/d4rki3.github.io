function svg_c_red(){
	document.getElementById('c_red').style.display="block";
	document.getElementById('c_green').style.display="none";}
function svg_c_green(){
	document.getElementById('c_green').style.display="block";
	document.getElementById('c_red').style.display="none";}
	
function svg_c_fechada(){
	document.getElementById('c_fechada').style.display="block";
	document.getElementById('c_aberta').style.display="none";}
function svg_c_aberta(){
	document.getElementById('c_aberta').style.display="block";
	document.getElementById('c_fechada').style.display="none";}
	
function pas_emeg(x){
	cat = x;
	var i = 90;
	svg_c_green();
	svg_c_aberta();
	adicionar(cat);
	form_pag(i);
	setTimeout("svg_c_red()", 1000);
	setTimeout("svg_c_fechada()", 1000);}

function abrir_can(){
	svg_c_green();
	svg_c_aberta();
	setTimeout("svg_c_red()", 1000);
	setTimeout("svg_c_fechada()", 1000);}

function svg_x_red(){
	document.getElementById('x_red').style.display="block";
	document.getElementById('s_green').style.display="none";}
function svg_s_green(){
	document.getElementById('s_green').style.display="block";
	document.getElementById('x_red').style.display="none";}

function calc_tempo(){
	tmp = Math.floor(Math.random() * 15) + 1;
	if (tmp < 10) {tmp = "0"+tmp;};}

function hora(){
	var dd = new Date().getDate();
	var m = new Date().getMonth() +1;
	var aa = new Date().getFullYear();
	
	if (dd < 10){ dd = "0" + dd;};
	if (m < 10){m = "0" + m;}
	
	var hh = new Date().getHours();
	var mm = new Date().getMinutes();
	var ss = new Date().getSeconds();
	
	if (ss < 10){ ss = "0" + ss;};
	if (mm < 10){mm = "0" + mm;}
	if (hh < 10){hh = "0" + hh;}
	
	var data = dd +"/"+ m +"/"+ aa;
	tempo = hh + ":" + mm + ":" + ss;
	
	document.getElementById('data_hora').innerHTML = data +"&nbsp"+ tempo;
	setTimeout("hora('tmp')", 1000);}

function a_op() {
	document.getElementById('m_op1').style.display="block";}
	
function f_op(){
	document.getElementById('m_op1').style.display="none";}

function calc_valor(a){
	//tar = 4;
	var inTar = document.getElementById("taxaPedagio").value;
	if (inTar){
		if (inTar >=0){
			tar = inTar;
		} else { tar = 4;}
			
	} else { tar = 4;}
	
	if (a == 07){
		taxa = tar * 1.5;
		taxaDec = parseFloat(taxa).toFixed(2);
		document.getElementById('in_troco').value = taxaDec
		//document.getElementById('categoria').innerHTML = "&nbsp;&nbsp" + cat + " categoria " + cat;
		document.getElementById('categoria').innerHTML = "<pre>"+"  " + cat + " categoria " + cat +"</pre>";
		document.getElementById('valor').innerHTML = "&nbsp;&nbsp" + taxaDec;
	} else if (a == 08){
		taxa = tar * 2;
		taxaDec = parseFloat(taxa).toFixed(2);
		document.getElementById('in_troco').value = taxaDec
		document.getElementById('categoria').innerHTML = "&nbsp;&nbsp" + cat + " categoria " + cat;
		document.getElementById('valor').innerHTML = "&nbsp;&nbsp" + taxaDec;
	} else if (a == 09){
		taxa = tar * 0.5;
		taxaDec = parseFloat(taxa).toFixed(2);
		document.getElementById('in_troco').value = taxaDec
		document.getElementById('categoria').innerHTML = "&nbsp;&nbsp" + cat + " categoria " + cat;
		document.getElementById('valor').innerHTML = "&nbsp;&nbsp" + taxaDec;
	} else if (a == 61){
		taxa = tar * 7;
		taxaDec = parseFloat(taxa).toFixed(2);
		document.getElementById('in_troco').value = taxaDec
		document.getElementById('categoria').innerHTML = "&nbsp;&nbsp" + cat + " categoria " + cat;
		document.getElementById('valor').innerHTML = "&nbsp;&nbsp" + taxaDec;
	} else if (a == 62){
		taxa = tar * 8;
		taxaDec = parseFloat(taxa).toFixed(2);
		document.getElementById('in_troco').value = taxaDec
		document.getElementById('categoria').innerHTML = "&nbsp;&nbsp" + cat + " categoria " + cat;
		document.getElementById('valor').innerHTML = "&nbsp;&nbsp" + taxaDec;
	} else if (a == 63){
		taxa = tar * 9;
		taxaDec = parseFloat(taxa).toFixed(2);
		document.getElementById('in_troco').value = taxaDec
		document.getElementById('categoria').innerHTML = "&nbsp;&nbsp" + cat + " categoria " + cat;
		document.getElementById('valor').innerHTML = "&nbsp;&nbsp" + taxaDec;
	} else {
		taxa = tar * a;
		taxaDec = parseFloat(taxa).toFixed(2);
		document.getElementById('in_troco').value = taxaDec;
		document.getElementById('categoria').innerHTML = "&nbsp;&nbsp" + cat + " categoria " + cat;
		document.getElementById('valor').innerHTML = "&nbsp;&nbsp" + taxaDec;}
	calc_troco();}
	
function calc_troco(){
	var vrecebido = parseFloat(document.getElementById('in_troco').value);
	var vtaxa = taxaDec;
	var vtroco = vrecebido - vtaxa;
	if (vtroco >= 0) {
		document.getElementById('troco').innerHTML = parseFloat(vtroco).toFixed(2);
		document.getElementById('falta').innerHTML = 0;
	} else if (vtroco <= 0) {
		document.getElementById('falta').innerHTML = parseFloat(vtroco).toFixed(2);
		document.getElementById('troco').innerHTML = 0;
	} else {
		document.getElementById('troco').innerHTML = 0;
		document.getElementById('falta').innerHTML = taxaDec;}
	setTimeout("calc_troco()", 1000);}

function form_pag(i) {
	document.getElementById('formPag1').style.display="block";
	if (i == 81) {
		document.getElementById('formPag1').style.display="none";
		fpag = 81
		aceitar();
	} else if (i == 82){
		document.getElementById('formPag1').style.display="none";
		fpag = 82;
		aceitar();
	} else if (i == 83){
		document.getElementById('formPag1').style.display="none";
		fpag = 83;
		aceitar();
	} else if (i == 80){
		document.getElementById('formPag1').style.display="none";
		fpag = 80;
		aceitar();
	} else if (i == 90){
		document.getElementById('formPag1').style.display="none";
		fpag = 90;
		aceitar();}}
		
	function m_isento(i) {
		document.getElementById('formPag1').style.display="none";
		document.getElementById('m_isento1').style.display="block";
		
		if (i == 80){
		document.getElementById('m_isento1').style.display="none";
		fpag = 80;
		aceitar();}}

function aceitar() {
	cancelar()
	var hora = tempo;
	ca = cat;
	var linha = hora+" "+cat; 
	var esp = '&nbsp;';
	calc_tempo()
	
	if (fpag <= 64) {
		var newItem = document.createElement("li");
		var textnode = document.createTextNode(linha+" "+"dinheiro \u00A0"+" "+"ok"+" "+tmp);
		newItem.appendChild(textnode);
		var list = document.getElementById("myList");
		list.insertBefore(newItem, list.childNodes[1]);
		abrir_can()}
	else if (fpag == 81) {
		var newItem = document.createElement("li");
		var textnode = document.createTextNode(linha+" "+"dbtrans \u00A0 "+"ok"+" "+tmp);
		newItem.appendChild(textnode);
		var list = document.getElementById("myList");
		list.insertBefore(newItem, list.childNodes[1]);
		abrir_can()}
	else if (fpag == 82) {
		var newItem = document.createElement("li");
		var textnode = document.createTextNode(linha+" "+"tag \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 "+" ok"+" "+tmp);
		newItem.appendChild(textnode);
		var list = document.getElementById("myList");
		list.insertBefore(newItem, list.childNodes[1]);
		abrir_can()}
	else if (fpag == 83) {
		var newItem = document.createElement("li");
		var textnode = document.createTextNode(linha+" "+"emv\u00A0 \u00A0 \u00A0 \u00A0 \u00A0"+"ok"+" "+tmp);
		newItem.appendChild(textnode);
		var list = document.getElementById("myList");
		list.insertBefore(newItem, list.childNodes[1]);
		abrir_can()}
	else if (fpag == 80) {
		var newItem = document.createElement("li");
		var textnode = document.createTextNode(linha+" "+" -\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 "+"ok"+" "+tmp);
		newItem.appendChild(textnode);
		var list = document.getElementById("myList");
		list.insertBefore(newItem, list.childNodes[1]);
		abrir_can()}
	else {
		var newItem = document.createElement("li");
		//var newItem2 = document.createElement("<pre>");
		var textnode = document.createTextNode(tempo+" "+"00"+" - \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0"+"ok"+" "+tmp);
		//var textnode = document.createTextNode(tempo+"00"+" "+"ok"+" "+tmp);
		newItem.appendChild(textnode);
		var list = document.getElementById("myList");
		list.insertBefore(newItem, list.childNodes[1]);
		abrir_can()}
		
	document.getElementById('esquerda2').style.display="none";
	document.getElementById('esquerda1').style.display="block";}

function cancelar() {
	var list = document.getElementById("myList");
	list.removeChild(list.childNodes[1]);
	document.getElementById('esquerda2').style.display="none";
	document.getElementById('esquerda1').style.display="block";
	document.getElementById('formPag1').style.display="none";
	document.getElementById('m_isento1').style.display="none";
	document.getElementById('des_cancela').style.display="none";}

function adicionar(a) {
	var hora = tempo;
	cat = a;
	fpag = a;
	
	var newItem = document.createElement("li");
	var textnode = document.createTextNode(hora + " " + cat );
	
	newItem.appendChild(textnode);
	
	var list = document.getElementById("myList");
	list.insertBefore(newItem, list.childNodes[1]);
	
	document.getElementById('esquerda1').style.display="none";
	document.getElementById('esquerda2').style.display="block";
	document.getElementById('des_cancela').style.display="block";
	calc_valor(a);}
	
window.onload=hora;