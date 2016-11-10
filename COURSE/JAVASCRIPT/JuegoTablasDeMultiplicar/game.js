// Arreglos de resultados
resultados = [];
// Cantidad de multiplicaciones
numero = 0;
	
	
function revisarTabla()
{
	document.getElementById('res').innerHTML = resultados;
	
	for (var i = 0; i < resultados.length; i ++)
	{
		var inputValue = document.getElementById('input' + i).value;
		
		var fila = document.getElementById("fila" + i);
		var x = fila.insertCell(1);
		
		
		if (inputValue == resultados[i])
		{
			x.innerHTML = "";
			x.innerHTML = "Buen resultado";
		}
		else
		{
			x.innerHTML = "";
			x.innerHTML = "Mal resultado";
		}
	}
}

function calcularTabla()
{
	document.getElementById('tablaMultiplicar').innerHTML="";
	numero = document.getElementById("num").value;
	
	table = document.createElement('table');
	table.id = "myTable";
	
	for (var i = 0; i < numero; i++)
	{
		// Se generan los números random
		var multiplicador1 = Math.floor((Math.random() * 20) + 1);
		var multiplicador2 = Math.floor((Math.random() * 20) + 1);
		
		// Almacenar el resultado
		resultados[i] = multiplicador1 * multiplicador2;
		
		var tr = document.createElement('tr'); 
		tr.id = "fila" + i;
		
		var td1 = document.createElement('td');
		var input = document.createElement('input');
		input.id = "input" + i;
		
		
		
		var text1 = document.createTextNode(multiplicador1 + " x " + multiplicador2 + " = ");
		td1.appendChild(text1);
	   
		tr.appendChild(td1);
		tr.appendChild(input);

		table.appendChild(tr);

	};

	document.getElementById("tablaMultiplicar").appendChild(table);

}
