$(document).ready(function () {

    $(".dataTables_wrapper .row:eq(0)").addClass("table-bus");

    $(".dataTables_wrapper .table-bus .col-sm-12:eq(0)").addClass("order-2");

    $('body').materializeInputs();

    $('form').materializeInputs(".input-material input-1, .input-material input-2");

    $(document).on("click",".close,.modal-close", function () {
      var modl = $(this).parent().parent().parent().parent().attr("id");
      $("#"+modl).modal("hide");
  });

});