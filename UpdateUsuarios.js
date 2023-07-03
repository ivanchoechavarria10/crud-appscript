function editarUsuario(form) {

  const fila = buscarFila(form.usuarioId);
  sheetUsuarios.getRange(fila, 2,1,sheetUsuarios.getLastColumn()-1).setValues([[
    form.nombreUsuario,
    form.apellidoUsuario,
    form.sexoUsuario,
    form.correoUsuario,
    form.fechaNacimientoUsuario,
    form.telefonoUsuario
  ]])

  return "Usuario editado";
  
}

function buscarFila(id = 3){
  const ids = sheetUsuarios.getRange(2,1,sheetUsuarios.getLastRow()-1,1).getValues().map(id => id[0]);
  /*console.log(ids);*/
  const index = ids.indexOf(Number(id));
  const row = index + 2;
  return row;
}
