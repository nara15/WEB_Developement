function seleccionarCurso() 
{
    var select = document.getElementById("select_curso");

    if (select.selectedIndex == select.length - 1) 
    {
    	document.getElementById("demo").innerHTML = "You selected: " + select.length + " "
    	+ select.selectedIndex;

    	var formCurso = document.getElementById("div_agregarCurso");
    	formCurso.style.display = 'block';
    }

}

function guardarCurso()
{
	var formCurso = document.getElementById("div_agregarCurso");
    formCurso.style.display = 'none';

    var nombre_curso = document.crearCursoForm.nombre_curso.value;
	
    document.getElementById("demo").innerHTML = nombre_curso;
}

function selectOtraTecnologia(checkboxElem) 
{
	if (checkboxElem.checked)
	{
		var element = document.createElement("input");
		element.setAttribute("type", "text");
		element.setAttribute("value", "");
		element.setAttribute("name", "nueva_tecnologia");
		
		var foo = document.getElementById("nuevaTecnologiaCheckbox");

		foo.appendChild(element);
	}   
}

function selectOtroTipoProyecto(radioElem)
{
	if (radioElem.checked)
	{
		var element = document.createElement("input");
		element.setAttribute("type", "text");
		element.setAttribute("value", "");
		element.setAttribute("name", "nuevo_tipo_tecnologia");
		
		var foo = document.getElementById("tipoProyectoRadio");

		foo.appendChild(element);
	}
}