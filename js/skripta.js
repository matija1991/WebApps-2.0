function kskw() {
	var broj = parseFloat(document.getElementById('ks').value);
	var rezultat = 0;
	rezultat = broj / 1.36;
	swal("KW = " + rezultat.toFixed(2).toString());
}

function kwks() {
	var broj = parseFloat(document.getElementById('kw').value);
	var rezultat = 0;
	rezultat = broj * 1.36;
	swal("KS = " + rezultat.toFixed(2).toString());
}
//************************ kwks end *********************
function cf() {
	var broj = parseFloat(document.getElementById('c').value);
	var rezultat = 0;
	rezultat = broj * 9 / 5 + 32;
	swal("F = " + rezultat.toFixed(2).toString());
}

function fc() {
	var broj = parseFloat(document.getElementById('f').value);
	var rezultat = 0;
	rezultat = (broj - 32) * (5 / 9);
	swal("C = " + rezultat.toFixed(2).toString());
}
//************************ f-c end *********************
function hrkeur() {
	var broj = parseFloat(document.getElementById('hrk').value);
	var rezultat = 0;
	rezultat = broj / 7.5;
	swal("EUR = " + rezultat.toFixed(2).toString());
}

function eurhrk() {
	var broj = parseFloat(document.getElementById('eur').value);
	var rezultat = 0;
	rezultat = broj * 7.5;
	swal("HRK = " + rezultat.toFixed(2).toString());
}
//************************ f-c end *********************
function fuel() {
	var l = parseFloat(document.getElementById('l').value);
	var km = parseFloat(document.getElementById('km').value);
	var rezultat = 0;
	rezultat = (l / km) * 100;
	swal("Potrošnja na 100km = " + rezultat.toFixed(2).toString() + "L");
}
//************************ fuel end *********************