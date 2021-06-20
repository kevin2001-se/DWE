$(document).ready(function () {
    const urlL = $("#url").val();
    const urlAjax = "app/LaboratorioAjax.php";
    /*============================================================
    LSITAR LABORATORIO
    ============================================================*/
    function DataTableLaboratorio() {
        $("#laboratorioTB").DataTable({
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
  
                  return row[1]+'<input type="hidden" class="codigoL" name="codigoL" value="'+ row[0] +'">'
  
                }},
                {"data" : "nom_lab"},
                {"data" : "direc_lab"},
                {"data" : "dist_lab"},
                {"data" : "ruc_lab"},
                {render: function(data, type, row){
    
                    return '<button type="button" class="btn btn-primary editarLab mr-1"><i class=" mdi mdi-pencil"></i></button><button type="button" class="btn btn-danger text-light eliminarLab"><i class="mdi mdi-delete"></i></button>'
                    
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
      DataTableLaboratorio();
      var table = $("#laboratorioTB").DataTable();
    /*============================================================
    REGISTRAR LABORATORIO
    ============================================================*/

    $("#agregarLaboratorio").submit(function (e) { 
        e.preventDefault();
        var lab = $(this).serialize();
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
                    data: lab+"&accion=reg",
                    success: function (response) {
                        if (response == "ok-registro") {
                            Swal.fire({
                              icon: 'success',
                              title: 'Registro Completado',
                              confirmButtonText: `Ok`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                $("#agregarLaboratorio")[0].reset();
                                $('#crearLab').modal('hide');
                                table.ajax.reload();
                              } else {
                                $("#agregarLaboratorio")[0].reset();
                                $('#crearLab').modal('hide');
                                table.ajax.reload();
                              }
                            })
                        }
                        if (response == "campos-vacio") {
                            toastr.warning('Complete todos los campos requeridos.');
                        }

                        if (response == "ruc_invalido") {
                            toastr.error('El formato del ruc es invalido.');
                        }

                        if (response == "ruc_mal") {
                            toastr.error('El campo ruc debe tener 11 digitos.');
                        }

                        if (response == "tel_invalido") {
                            toastr.error('El formato del Telefono es invalido.');
                        }

                        if (response == "telefono-mal") {
                            toastr.warning('El Telefono solo debe tener 7 o 9 digitos.');
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
        })

    });

    /*============================================================
    OBTENER LABORATORIO
    ============================================================*/

    $(document).on("click",".editarLab", function () {
        
        const codL = $(this).parent().parent().find("td:eq(0)").text();
        $.ajax({
            type: "POST",
            url: urlAjax,
            data: "codigoL="+codL,                 
            success: function (response) {
                if (response != "error") {
                    var json = JSON.parse(response);
                    $("#codigo").attr("value", json.codigo);
                    $("#codigo_labE").attr("value", json.cod_lab);
                    $("#nombre_labE").attr("value", json.nom_lab);
                    $("#direccion_labE").attr("value", json.direc_lab);
                    $("#distrito_labE").attr("value", json.dist_lab);
                    $("#ruc_labE").attr("value", json.ruc_lab);
                    $("#telefono_labE").attr("value", json.tele_lab);
                    $("#editLab").modal("show");
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
    MODIFICAR LABORATORIO
    ============================================================*/

    $("#editarLaboratorio").submit(function (e) { 
        e.preventDefault();
        var lab = $(this).serialize();
        Swal.fire({
            icon: 'info',
            title: 'Desea Actualizar este Laboratorio',
            showDenyButton: true,
            confirmButtonText: `Actualizar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {                
                $.ajax({
                    type: "POST",
                    url: urlAjax,
                    data: lab+"&accion=mod",
                    success: function (response) {
                        if (response == "ok-registro") {
                            Swal.fire({
                              icon: 'success',
                              title: 'Actualización Completada',
                              confirmButtonText: `Ok`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                $("#editarLaboratorio")[0].reset();
                                $('#editLab').modal('hide');
                                table.ajax.reload();
                              } else {
                                $("#editarLaboratorio")[0].reset();
                                $('#editLab').modal('hide');
                                table.ajax.reload();
                              }
                            })
                        }
                        if (response == "campos-vacio") {
                            toastr.warning('Complete todos los campos requeridos.');
                        }

                        if (response == "ruc_invalido") {
                            toastr.error('El formato del ruc es invalido.');
                        }

                        if (response == "ruc_mal") {
                            toastr.error('El campo ruc debe tener 11 digitos.');
                        }

                        if (response == "tel_invalido") {
                            toastr.error('El formato del Telefono es invalido.');
                        }

                        if (response == "telefono-mal") {
                            toastr.warning('El Telefono solo debe tener 7 o 9 digitos.');
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
        })
    });

    /*============================================================
    ELIMINAR LABORATORIO
    ============================================================*/

    $(document).on("click",".eliminarLab", function () {
        
        const codEl = $(this).parent().parent().find(".codigoL").val();

        Swal.fire({
            icon: 'info',
            title: 'Desea Eliminar este Laboratorio',
            showDenyButton: true,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {  
                $.ajax({
                    type: "POST",
                    url: urlAjax,
                    data: "codEli="+codEl,
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
        })
    });

});