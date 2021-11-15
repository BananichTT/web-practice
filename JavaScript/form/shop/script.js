function change(){
	var a = document.getElementById("napitki");

	switch(a.options[a.selectedIndex].value){
		case '1':
		document.getElementById('tea_items').style.display = 'none';
		document.getElementById('coffee_items').style.display = 'none';
		break;

		case 'tea':
		document.getElementById('coffee_items').style.display = 'none';
		document.getElementById('tea_items').style.display = 'block';
		break;

		case 'coffee':
		document.getElementById('tea_items').style.display = 'none';
		document.getElementById('coffee_items').style.display = 'block';
		break;

	}
}