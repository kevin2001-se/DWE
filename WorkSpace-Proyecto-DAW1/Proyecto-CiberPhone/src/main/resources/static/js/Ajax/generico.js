$(document).ready(function () {
    const urlG = $("#url").val();
    const urlAjax = "app/GenericoAjax.php";
 /*============================================================
    LISTAR GENERICO
    ============================================================*/
    function DataTableGenerico() {
        $("#genericoTB").DataTable({
            paging: true,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: false,
            responsive: true,
            "ajax":{
                "url": urlAjax,
                "dataSrc":""
            },
            "columns":[
                {render: function(data, type,row){
  
                  return row[1]+'<input type="hidden" class="codigoG" name="codigoG" value="'+ row[0] +'">'
  
                }},
                {"data" : "nom_gen"},
                {render: function(data, type, row){
    
                    return '<button type="button" class="btn btn-primary editarGen mr-1"><i class=" mdi mdi-pencil"></i></button><button type="button" class="btn btn-danger text-light eliminarGen"><i class="mdi mdi-delete"></i></button>'
                    
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
      DataTableGenerico();
      var table = $("#genericoTB").DataTable();
    /*============================================================
    REGISTRAR GENERICO
    ============================================================*/

    $("#agregarGenerico").submit(function (e) { 
        e.preventDefault();
        const nomG = $("#nombre_gen").val();

        Swal.fire({
            icon: 'info',
            title: 'Desea Registrar este Laboratorio',
            showDenyButton: true,
            confirmButtonText: `Registrar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) { 
                $.ajax({
                    type: "POST",
                    url: urlAjax,
                    data: "nom_ge="+nomG,
                    success: function (response) {
                        if (response == "ok-registro") {
                            Swal.fire({
                              icon: 'success',
                              title: 'Registro Completado',
                              confirmButtonText: `Ok`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                $("#agregarGenerico")[0].reset();
                                $('#crearLab').modal('hide');
                                table.ajax.reload();
                              } else {
                                $("#agregarGenerico")[0].reset();
                                $('#crearLab').modal('hide');
                                table.ajax.reload();
                              }
                            })
                        }
                        if (response == "campos-vacio") {
                            toastr.warning('Complete todos los campos requeridos.');
                        }

                        if (response == "error") {
                            toastr.error('Ah ocurrido un error inesperado');
                        }

                    },error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
                        toastr.error('Error en el Servidor');
                    }  
                }); 
            }
    
        });

    });

    /*============================================================
    OBTENER GENERICO
    ============================================================*/

    $(document).on("click",".editarGen", function () {
        
        const editG = $(this).parent().parent().find("td:eq(0)").text();

        $.ajax({
            type: "POST",
            url: urlAjax,
            data: "cod_ge="+editG,
            success: function (response) {
                if (response != "error") {
                    var json = JSON.parse(response);
                    $("#codigo").attr("value", json.codigo);
                    $("#codigo_genE").attr("value", json.cod_gen);
                    $("#nombre_genE").attr("value", json.nom_gen);
                    $("#editGen").modal("show");
                }else{
                    toastr.error('Ah ocurrido un error inesperado');
                }
            },error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
                toastr.error('Error en el Servidor');
            }  
        });

    });

    /*============================================================
    MODIFICAR GENERICO
    ============================================================*/

    $("#editarGenerico").submit(function (e) { 
        e.preventDefault();
        const nomG = $(this).serialize();

        Swal.fire({
            icon: 'info',
            title: 'Desea Actualizar este Laboratorio',
            showDenyButton: true,
            confirmButtonText: `Registrar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) { 
                $.ajax({
                    type: "POST",
                    url: urlAjax,
                    data: nomG+"&accion=mod",
                    success: function (response) {
                        if (response == "ok-registro") {
                            Swal.fire({
                              icon: 'success',
                              title: 'Actualización Completada',
                              confirmButtonText: `Ok`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                $("#editarGenerico")[0].reset();
                                $('#editLab').modal('hide');
                                table.ajax.reload();
                              } else {
                                $("#editarGenerico")[0].reset();
                                $('#editLab').modal('hide');
                                table.ajax.reload();
                              }
                            })
                        }
                        if (response == "campos-vacio") {
                            toastr.warning('Complete todos los campos requeridos.');
                        }

                        if (response == "error") {
                            toastr.error('Ah ocurrido un error inesperado');
                        }

                    },error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
                        toastr.error('Error en el Servidor');
                    }  
                }); 
            }
    
        });

    });

    /*============================================================
    ELIMINAR GENERICO
    ============================================================*/

    $(document).on("click",".eliminarGen", function (e) {
        e.preventDefault();
        const codGEN = $(this).parent().parent().find(".codigoG").val();
        Swal.fire({
            icon: 'info',
            title: 'Desea Eliminar este Generico',
            showDenyButton: true,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: urlAjax,
                    data: "cod_el="+codGEN,
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
                    },error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
                        toastr.error('Error en el Servidor');
                    } 
                });
            }
         });
    });

});