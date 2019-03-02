function show() {
	document.getElementById('myDropdown').style.display='block';
	document.getElementById('dropdownbtn').onclick=hide;
}
function hide(){
	document.getElementById('myDropdown').style.display='none';
	document.getElementById('dropdownbtn').onclick=show;
}