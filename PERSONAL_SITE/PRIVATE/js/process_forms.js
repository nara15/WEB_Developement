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

/* Submit form */

function submitAjax(form)
{
	var des = form.descripcion_proyecto.value;
	var nombre = form.nombre_proyecto.value;
	var duracion = form.duracion_proyecto.value;
	var semestre = form.semestre_proyecto.value;
	var curso = form.curso_proyecto.value;
	var tipo_proyecto = form.tipo_proyecto.value;
	
	document.getElementById("demo").innerHTML = des;
}


/* Validating the form */
function validateFormOnSubmit(form)
{
	var res = "";
	res += validateField(form.nombre_proyecto);
	res += validateField(form.duracion_proyecto);
	res += validateField(form.semestre_proyecto);
	
	if (res.length >= 1)
	{
		return false;
	}
	else
	{
		submitAjax(form);
		return false;
	}
}

function validateField(field)
{
	var error = "";
	if (field.value.length == 0)
	{
		field.style.background = 'Red';
		var error = "1";
	}
	return error;
}