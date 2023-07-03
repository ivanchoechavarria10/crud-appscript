function agregarUsuario(form) {

  /*console.log(form);*/
  const id = crearNuevoId();
  const nombre = form.nombreUsuario;
  const apellidos = form.apellidoUsuario;
  const sexo = form.sexoUsuario;
  const correo = form.correoUsuario;
  const fechaNacimiento = form.fechaNacimientoUsuario;
  const telefono = form.telefonoUsuario;

  sheetUsuarios.appendRow([

    id,
    nombre,
    apellidos,
    sexo,
    correo,
    fechaNacimiento,
    telefono
  ]);

  return "Usuario agregado";
  
}

function crearNuevoId(){
  let id = 1;
  if(sheetUsuarios.getLastRow()=== 1){
    return id;
  }
  const ids = sheetUsuarios.getRange(2,1, sheetUsuarios.getLastRow()-1,1).getValues().map(id=>id[0]);
  /*console.log(ids);*/
  let maxId = 0;
  ids.forEach(id=>{
    if(id > maxId){
      maxId = id;
    }
  });
  return maxId +1;
}

function test(){
  console.log(crearNuevoId());
}
