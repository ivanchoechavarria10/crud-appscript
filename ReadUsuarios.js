function readUsers() {
  const dataUsuarios = sheetUsuarios.getDataRange().getDisplayValues();
  dataUsuarios.shift();
  if(dataUsuarios.length === 0){
    return "No hay registros para mostrar"
  }

  /*console.log(dataUsuarios);*/
  return dataUsuarios;
  
}
