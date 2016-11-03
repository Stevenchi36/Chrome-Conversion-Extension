var translate = {
	kgFromlb: function(){
		document.getElementById('kg').value = parseFloat((document.getElementById("lb").value / 2.2046226218).toFixed(5));
	},
	lbFromkg: function(){
		document.getElementById('lb').value = parseFloat((document.getElementById("kg").value * 2.2046226218).toFixed(5));
	}
}

document.addEventListener('DOMContentLoaded',
	function (){
		var lb = document.getElementById('lb');
		lb.addEventListener("keyup", function(){translate.kgFromlb();}, false);
		var kg = document.getElementById('kg');
		kg.addEventListener("keyup", function(){translate.lbFromkg();}, false);
	}
);