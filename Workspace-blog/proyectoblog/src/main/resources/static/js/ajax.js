$(document).ready(() => {
	
	$(document).on("click", ".eliminarAdmin", function(){
		const codigo = $(this).parent().parent().find(".id_admin").text();
		const id = parseInt(codigo)
		Swal.fire({
		  icon: 'info',
		  title: 'Esta Seguro de Eliminar a este Administrador',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
  		  cancelButtonColor: '#d33',
		  confirmButtonText: `Eliminar`,
		}).then((result) => {
		  /* Read more about isConfirmed, isDenied below */
		  if (result.isConfirmed) {
			$.ajax({
	            url: "/admin/eliminarAdmin/"+id,
	            success: function (response) {
					if(response){
						Swal.fire({
						  icon: 'success',
						  title: 'Se Elimino el Administrador',
						  confirmButtonText: `ok`,
						  confirmButtonColor: '#3085d6',
						}).then((result) => {
						  if (result.isConfirmed) {
								location.href = "/admin/administrador"
							}
						})
					}
		    	}
	        });
		  } else if (result.isDenied) {
		    Swal.fire('No se Guardo ni un Cambio', '', 'info')
		  }
		})
	})
	
})