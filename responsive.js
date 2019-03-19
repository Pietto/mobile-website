var myDropdown = document.getElementById('myDropdown');
var dropdownbtn = document.getElementById('dropdownbtn');
var dropdownbtn2 = document.getElementById('dropdownbtn2');

function show() {
	myDropdown.style.display='block';
	dropdownbtn.onclick=hide;
	myDropdown.style.top='50px';
}
function hide(){
	myDropdown.style.display='none';
	dropdownbtn.onclick=show;
}
function show2() {
	myDropdown.style.display='block';
	dropdownbtn2.onclick=hide2;
	myDropdown.style.top='110px';
} 
function hide2(){
	myDropdown.style.display='none';
	dropdownbtn2.onclick=show2;
}