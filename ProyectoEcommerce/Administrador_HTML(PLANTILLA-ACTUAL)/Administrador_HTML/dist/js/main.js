$(document).ready(function () {

    $(".dataTables_wrapper .row:eq(0)").addClass("table-bus");

    $(".dataTables_wrapper .table-bus .col-sm-12:eq(0)").addClass("order-2");

    $('body').materializeInputs();

    $('form').materializeInputs(".input-material input-1, .input-material input-2");

    $(document).on("click",".close,.modal-close", function () {
      var modl = $(this).parent().parent().parent().parent().attr("id");
      $("#"+modl).modal("hide");
  });
  
  const btn = document.querySelector("#form_register");

  class UI{
      mensajesFormulario(mensaje, color){

          console.log(mensaje, color);
          const alert = document.createElement('div');
          alert.classList.add('p-3','mb-2','text-white','text-uppercase');

          if (color === 'danger') {
              alert.classList.add('bg-danger');
          }else if (color === 'warnnig') {
              alert.classList.add('bg-warnnig');
          }

          const menssage = document.createElement('h5');
          menssage.classList.add('mb-0');
          menssage.textContent = mensaje;
          alert.appendChild(menssage);
          document.querySelector(".contenedor-formulario").insertBefore(alert,btn);

          setTimeout(() => {
              alert.remove();
          }, 5000);
      }
  }

  const ui = new UI();
    //Mostrar Foto

    $("#portada_articulo").change(function (e) { 
      e.preventDefault();
      
      const image = this.files[0];

      if (image["type"] != "image/jpeg" && image["type"] != "image/png") {
        
        $("#portada_articulo").val("");
        ui.mensajesFormulario('Solo imagenes tipo JPG o PNG', 'danger');
        return;
      }else if (image["size"] > 2000000) {
        
        $("#portada_articulo").val("");
        ui.mensajesFormulario('El tamaño maximo es de 2MB', 'danger');
        return;
      }else{

        const datosImage = new FileReader;

        datosImage.readAsDataURL(image);

        $(datosImage).on("load", (e) => {
          
          const rutaImagen = e.target.result;

          $(".portada_articulo").attr("src", rutaImagen);
        })

      }

    });

    $('#desp_articulo').summernote();

});