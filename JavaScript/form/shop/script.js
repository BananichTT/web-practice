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

function btnClick(){
	let sum = 0;
	

	var a = document.getElementById("napitki");
	var val1 = a.options[a.selectedIndex].value
	switch(val1){
		case 'tea':
			var b = document.getElementById("tea_items_select");
			var val2 = b.options[b.selectedIndex].value;
			switch(val2){
				case 'green_tea':
				sum = sum + 150;
				break;

				case 'black_tea':
				sum = sum + 100;
				break
			}
		if(forma.t_shugar.checked){
			sum = sum + 10;
		}
		if(document.forma.t_cup[1].checked){
			sum = sum + 50;
		}
		let t_name_text = forma.t_text.value;

		alert("Стоимость вашего заказа, " + t_name_text + ", составит: " + sum + " рублей");
		break;

		case 'coffee':
			var c = document.getElementById("coffee_items_select");
			var val3 = c.options[c.selectedIndex].value;
			switch(val3){
				case 'americano':
				sum = sum + 350;
				break;

				case 'capuchino':
				sum = sum + 300;
				break;
			}
		if(forma.c_sirop.checked){
			sum = sum + 20;
		}
		if(forma.c_shugar.checked){
			sum = sum + 10;
		}
		if(document.forma.c_cup[1].checked){
			sum = sum + 50;
		}	
		let c_name_text = forma.c_text.value;

		alert("Стоимость вашего заказа, " + c_name_text + ", составит: " + sum + " рублей");
		break;

	}
		
}