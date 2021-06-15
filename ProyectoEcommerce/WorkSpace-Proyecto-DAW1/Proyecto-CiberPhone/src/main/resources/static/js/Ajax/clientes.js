$(document).ready(function () {
    const urlP = $("#url").val();

    function DataTableCliente() {
      $("#clienteTB").DataTable({
          paging: true,
          searching: true,
          ordering: true,
          info: true,
          autoWidth: false,
          responsive: true,
          "ajax":{
              "url": "app/ClienteAjax.php",
              "dataSrc":""
          },
          "columns":[
              {render: function(data, type,row){

                return row[1]+'<input type="hidden" class="codigoC" name="codigoC" value="'+ row[0] +'">'

              }},
              {"data" : "nom_cliente"},
              {"data" : "dire_cliente"},
              {"data" : "dist_cliente"},
              {"data" : "ruc_cliente"},
              {"data" : "tel_cliente"},
              {render: function(data, type, row){
  
                  return '<button type="button" class="btn btn-primary editarCli mr-1"><i class=" mdi mdi-pencil"></i></button><button type="button" class="btn btn-danger text-light eliminarCli"><i class="mdi mdi-delete"></i></button>'
                  
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
    DataTableCliente();
    var table = $("#clienteTB").DataTable();

    /*============================================================
    CREAR CLIENTE
    ============================================================*/

    $("#agregarCliente").submit(function (e) { 
        e.preventDefault();
        var form = $(this).serialize();
        Swal.fire({
            icon: 'info',
            title: 'Desea Registrar este Cliente',
            showDenyButton: true,
            confirmButtonText: `Registrar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {

                $.ajax({
                    type: "POST",
                    url: "app/ClienteAjax.php",
                    data: form,
                    success: function (response) {
                        if (response == "ok-registro") {
                            Swal.fire({
                              icon: 'success',
                              title: 'Registro Completado',
                              confirmButtonText: `Ok`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                $("#agregarCliente")[0].reset();
                                $('#crearCli').modal('hide');
                                table.ajax.reload();
                              } else {
                                $("#agregarCliente")[0].reset();
                                $('#crearCli').modal('hide');
                                table.ajax.reload();
                              }
                            })
                      }

                      if (response == "telefono-mal") {
                        toastr.error('El telefono debe llevar solo 7 o 9 digitos');
                      }

                      if (response == "campos-malos") {
                        toastr.error('Escribe Correctamente los campos');
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
    OBTENER CLIENTE
    ============================================================*/

    $(document).on("click",".editarCli", function () {
        
        const codCli = $(this).parent().parent().find("td:eq(0)").text();

       $.ajax({
           type: "POST",
           url: "app/ClienteAjax.php",
           data: "codigoCli="+codCli,
           success: function (response) {
               if (response != "error") {
                var json = JSON.parse(response);
                $("#codigo").attr("value", json.codigo);
                $("#codigo_cliE").attr("value", json.cod_cliente);
                $("#nombre_cliE").attr("value", json.nom_cliente);
                $("#direccion_cliE").attr("value", json.dire_cliente);
                $("#distrito_cliE").attr("value", json.dist_cliente);
                $("#ruc_cliE").attr("value", json.ruc_cliente);
                $("#telefono_cliE").attr("value", json.tel_cliente);
                $("#editCli").modal("show");
               }else{
                toastr.error('Ah ocurrido un error inesperado');
               }
           }
       });

    });

    $("#editarCliente").submit(function (e) { 
        e.preventDefault();
        var form = $(this).serialize();

        Swal.fire({
            icon: 'info',
            title: 'Desea Actualizar este Cliente',
            showDenyButton: true,
            confirmButtonText: `Actualizar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "app/ClienteAjax.php",
                    data: form,
                    success: function (response) {
                        if (response == "ok-editar") {
                            Swal.fire({
                              icon: 'success',
                              title: 'Actualización Completada',
                              confirmButtonText: `Ok`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                $("#editarCliente")[0].reset();
                                $('#editCli').modal('hide');
                                table.ajax.reload();
                              } else {
                                $("#editarCliente")[0].reset();
                                $('#editCli').modal('hide');
                                table.ajax.reload();
                              }
                            })
                      }

                      if (response == "telefono-mal") {
                        toastr.error('El telefono debe llevar solo 7 o 9 digitos');
                      }

                      if (response == "campos-malos") {
                        toastr.error('Escribe Correctamente los campos');
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

    $(document).on("click",".eliminarCli", function (e) {
        e.preventDefault();
        const codCli = $(this).parent().parent().find(".codigoC").val();
        Swal.fire({
            icon: 'info',
            title: 'Desea Eliminar este Cliente',
            showDenyButton: true,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "app/ClienteAjax.php",
                    data: "codEli="+codCli,
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