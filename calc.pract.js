window.addEventListener('click', init);

function init() {
	document.getElementById('submit').addEventListener('click', fun);
	document.querySelector('button').addEventListener('click', calc);
}

function calc() {
	var tt = this.value;
	return tt;
}


function fun(a) {
	var t1 = parseInt(document.getElementById('t1').value);
	var t2 = parseInt(document.getElementById('t2').value);
//	var t3 = document.getElementById('calc').value;
	var run = document.getElementById('demo');
	var run2 = document.getElementById('demo2');
	var resul = t1 + t2;

		run.innerText = resul;
	run.innerText = eval(document.getElementById('t1').value);

}


//window.addEventListener('click', init);
//
//function init() {
//document.getElementById('submit').addEventListener('click', fun);
//document.querySelector('button').addEventListener('click', calc);
//}
//
//function fun(a) {
//var t1 = parseInt(document.getElementById('t1').value);
//var t2 = parseInt(document.getElementById('t2').value);
//}
//
//
//function 
