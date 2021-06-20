$(document).ready(function () {
    
    const urlAjax = "app/ProductoAjax.php";
    /*============================================================
    LISTAR PRODUCTO
    ============================================================*/
    function DataTableProducto() {
        $("#productoTB").DataTable({
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
  
                  return row[1]+'<input type="hidden" class="codigoPr" name="codigoPr" value="'+ row[0] +'">'
  
                }},
                {"data" : "nom_pro"},
                {"data" : "nom_lab"},
                {"data" : "pvf"},
                {"data" : "null","defaultContent":"0"},
                {"data" : "null","defaultContent":"0"},
                {"data" : "cod_barra"},
                {render: function(data, type, row){
    
                    return '<button type="button" class="btn btn-primary editarPro mr-1"><i class=" mdi mdi-pencil"></i></button><button type="button" class="btn btn-secondary infoPro mr-1"><i class="fas fa-file-invoice"></i></button><button type="button" class="btn btn-danger text-light eliminarPro"><i class="mdi mdi-delete"></i></button>'
                    
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
      DataTableProducto();
      var table = $("#productoTB").DataTable();

});