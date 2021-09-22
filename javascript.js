function edit_row(no)
{
 document.getElementById("escondido").style.display="block";
 document.getElementById("BtnEditar"+no).style.display="none";
 document.getElementById("BtnEdicion"+no).style.display="block";

 var gustos=document.getElementById("gustos_row"+no);
 var porcentaje=document.getElementById("porcentaje_row"+no);
  
 var gustos_data=gustos.innerHTML;
 var porcentaje_data=porcentaje.innerHTML;
  
 gustos.innerHTML="<input type='text' name='gusto' id='gustos_text"+no+"' value='"+gustos_data+"'>";
 porcentaje.innerHTML="<input type='text' name='porcentaje' id='porcentaje_text"+no+"' value='"+porcentaje_data+"'>";

}

function AgregarDato()
{
 var gustos=document.getElementById("gusto").value;
 var porcentaje=0;
 var edicion="En Edicion"

 var table=document.getElementById("tabla");
 var longitud=(table.rows.length);
 var row = table.insertRow(longitud).outerHTML="<tr id='row"+longitud+"'><td id='gustos_row"+longitud+"'>"+gustos+"</td><td id='porcentaje_row"+longitud+"'>"+porcentaje+"</td><td><input type='button' style='background-color:white; color:blue; cursor: pointer; width:30px;' id='BtnEditar"+longitud+"' value='Edit' class='edit' onclick='edit_row("+longitud+")'> <input type='button' style='background-color:white; color:grey; display:none;' id='BtnEdicion"+longitud+"' value='En edicion' class='save' > </td></tr>";
 document.getElementById("gusto").value="";
 document.getElementById("porcentaje").value="";
}