function show() {
	document.getElementById('myDropdown').style.display='block';
	document.getElementById('dropdownbtn').onclick=hide;
}
function hide(){
	document.getElementById('myDropdown').style.display='none';
	document.getElementById('dropdownbtn').onclick=show;
}





function show2() {
	document.getElementById('myDropdown').style.display='block';
	document.getElementById('dropdownbtn2').onclick=hide2;
	document.getElementById('myDropdown').style.top='500px';
} 
function hide2(){
	document.getElementById('myDropdown').style.display='none';
	document.getElementById('dropdownbtn2').onclick=show2;
}