function seleccionarCurso() 
{
    var select = document.getElementById("select_curso");

    if (select.selectedIndex == select.length - 1) 
    {
    	document.getElementById("demo").innerHTML = "You selected: " + select.length + " "
    	+ select.selectedIndex;
    }

    
}