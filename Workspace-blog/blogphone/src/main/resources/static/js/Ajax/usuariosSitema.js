$(document).ready(function () {

    const urlP = $("#url").val();
    /*============================================================
    LISTAR USUARIO
    ============================================================*/
    function DataTableUsuario() {
        $("#usuarioTB").DataTable({
            paging: true,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: false,
            responsive: true,
            "ajax":{
                "url": "app/UsuarioAjax.php",
                "dataSrc":""
            },
            "columns":[
                {render: function(data, type,row){
  
                  return row[1]+'<input type="hidden" class="codigoUsu" name="codigoUsu" value="'+ row[0] +'">'
  
                }},
                {"data" : "nom_usuario"},
                {"data" : "nom_persona"},
                {"data" : "estado_usuario",
                render: function(data, type, row){
                    
                    if (data == "Habilitado") {
                        return '<span class="badge bg-success">'+data+'</span> '
                    }else{
                        return '<span class="badge bg-danger">'+data+'</span> '
                    }
                    
                }},
                {"data" : "nombre_area"},
                {render: function(data, type, row){
    
                    return '<button type="button" class="btn btn-primary editarUsu mr-1"><i class=" mdi mdi-pencil"></i></button><button type="button" class="btn btn-danger text-light eliminarUsu"><i class="mdi mdi-delete"></i></button>'
                    
                }}
            ],
              "order": [[ 0, "desc" ]],
              "language": {
                  "sProcessing": "Procesando...",
                  "sLengthMenu": "Mostrar _MENU_ registros",
                  "sZeroRecords": "No se encontraron resultados",
                  "sEmptyTable": "Ningún dato disponible en esta tabla",
                  "sInfo": "Mostrando registros del _START_ al _END_",
                  "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
                  "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                  "sInfoPostFix": "",
                  "sSearch": "Buscar:",
                  "sUrl": "",
                  "sInfoThousands": ",",
                  "sLoadingRecords": "Cargando...",
                  "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                  },
                  "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                  }
              
                }
          });
      }
      DataTableUsuario();
      var table = $("#usuarioTB").DataTable();
    /*============================================================
    AJAX AGREGAR USUARIO
    ============================================================*/
    $("#agregarUsuario").submit(function (e) { 
        e.preventDefault();

        const FormAgregar = $(this).serialize();

        Swal.fire({
            icon: 'info',
            title: 'Desea Registrar este Usuario',
            showDenyButton: true,
            confirmButtonText: `Registrar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "app/UsuarioAjax.php",
                    data: FormAgregar,
                    beforeSend:function () { 
        
                    },
                    success: function (response) {
                        if (response == "ok-registro") {
                              Swal.fire({
                                icon: 'success',
                                title: 'Registro Completado',
                                confirmButtonText: `Ok`,
                              }).then((result) => {
                                if (result.isConfirmed) {
                                    $("#agregarUsuario")[0].reset();
                                    $('#crearUSU').modal('hide');
                                    table.ajax.reload();
                                } else {
                                    $("#agregarUsuario")[0].reset();
                                    $('#crearUSU').modal('hide');
                                    table.ajax.reload();
                                }
                              })
                        }
                        if (response == "campos-malos") {
                            toastr.error('Escribe Correctamente los campos');
                        }

                        if (response == "passw-malo") {
                            toastr.error('Las Contraseñas no coinciden');
                        }

                        if (response == "campos-vacios") {
                            toastr.error('Complete los campos requeridos');
                        }

                        if (response == "error") {
                            toastr.error('Ah ocurrido un error inesperado');
                        }
                    }
                });
            }
        })

    });

    /*============================================================
    AJAX EDITAR USUARIO
    ============================================================*/

    $("#estado_usuE").change(function() {
        if($(this).is(':checked')) {
            $("#estado_usuE").attr("value","Habilitado");
            $(".estadoE").text("Habilitado");
        }else{
            $(".estadoE").text("Deshabilitado");
            $("#estado_usuE").attr("value","Deshabilitado");
        }
    });

    $(document).on("click",".editarUsu", function () {
        
        const codUsu = $(this).parent().parent().find("td:eq(0)").text();

        $.ajax({
            type: "POST",
            url: "app/UsuarioAjax.php",
            data: "codUsu="+codUsu,
            success: function (response) {
                if (response != "error") {
                    var json = JSON.parse(response);
                    $("#codigoE").attr("value", json.cod_usuario);
                    $("#codigo_usuE").attr("value", json.codigo);
                    $("#usuarioE").attr("value",json.nom_usuario);
                    $("#nombre_usuE").attr("value",json.nom_persona);
                    $("#passw_actual").attr("value",json.pasw_usuario);
                    $("#correo_usuE").attr("value",json.correo_usuario);
                    $("#estado_usuE").attr("value",json.estado_usuario);
                    if (json.estado_usuario == "Habilitado") {
                        $(".estadoE").text("Habilitado");
                        $("#estado_usuE").prop('checked', true);
                    }else{
                        $(".estadoE").text("Deshabilitado");
                        $("#estado_usuE").prop('checked', false);
                    }
                    $.ajax({
                        type: "POST",
                        url: "app/UsuarioAjax.php",
                        data: "selectE=",
                        success: function (response1) {
                            var json1 = JSON.parse(response1);
            
                            var html;
                            json1.forEach(json1 => {
                                if (json.nombre_area == json1.nombre_area) {
                                    var prin = json1.nombre_area;
                                    html += `
                                    <option value="${json1.cod_area}">${prin}</option>
                                    `;
                                }
                            });
                            json1.forEach(json2 => {
                                if (json.nombre_area != json2.nombre_area) {
                                    var prin = json2.nombre_area;
                                    html += `
                                    <option value="${json2.cod_area}">${prin}</option>
                                    `;
                                }
                            });
                            $("#rol_usuE").html(html);
                            $("#editarUsu").modal("show");
                        }
                    });
                }else{
                    toastr.error('Ah ocurrido un error inesperado');
                }
                
            }
        });
    });

    /*============================================================
    AJAX ACTUALIZAR USUARIO
    ============================================================*/

    $("#editarUsu form").submit(function (e) { 
        e.preventDefault();
        
        var form = $(this).serialize();

        Swal.fire({
            icon: 'info',
            title: 'Desea Actualizar este Usuario',
            showDenyButton: true,
            confirmButtonText: `Actualizar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "app/UsuarioAjax.php",
                    data: form,
                    success: function (response) {
                        if (response == "ok-update") {
                            Swal.fire({
                              icon: 'success',
                              title: 'Actualización Completada',
                              confirmButtonText: `Ok`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                $("#editarUsu form")[0].reset();
                                $('#editarUsu').modal('hide');
                                table.ajax.reload();
                              } else {
                                $("#editarUsu form")[0].reset();
                                $('#editarUsu').modal('hide');
                                table.ajax.reload();
                              }
                            })
                      }
                        if (response == "campos-malos") {
                            toastr.error('Escribe Correctamente los campos');
                        }

                        if (response == "passw-malo") {
                            toastr.error('Las Contraseñas no coinciden');
                        }

                        if (response == "campos-vacios") {
                            toastr.error('Complete los campos requeridos');
                        }

                        if (response == "error") {
                            toastr.error('Ah ocurrido un error inesperado');
                        }
                    }
                });
            }
        })
    });

    $(document).on("click",".eliminarUsu", function () {
        
        var codigoU = $(this).parent().parent().find(".codigoUsu").val();

        Swal.fire({
            icon: 'info',
            title: 'Desea Eliminar este Usuario',
            showDenyButton: true,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "app/UsuarioAjax.php",
                    data: "codEli="+codigoU,
                    success: function (response) {
                        if (response == "ok-eliminar") {
                            Swal.fire({
                                icon: 'success',
                                title: 'Eliminación Completada',
                                confirmButtonText: `Ok`,
                              }).then((result) => {
                                if (result.isConfirmed) {
                                    table.ajax.reload();
                                } else {
                                    table.ajax.reload();
                                }
                              })
                        }
                        if (response == "error") {
                            toastr.error('Ah ocurrido un error inesperado');
                        }
                    }
                });
            }
         });
    });

});