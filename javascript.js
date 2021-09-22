function AgregarDato()
{
    var gusto = document.getElementById('gusto').value;
    var porcentaje = 0;
    var edit = "Editar";
    edit.onclick = function() {
      };

      var lista = document.getElementById('tabla');

      var newRow = lista.insertRow(tabla.rows.length);
      
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      
      cel1.innerHTML = gusto;
      cel2.innerHTML = porcentaje;
      cel3.innerHTML = edit;
}