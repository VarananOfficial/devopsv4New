document.querySelectorAll(".component-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.getElementById("slideForm").classList.toggle("active");
  });
});

$(document).ready(function () {
  $("#mb_table").css("display", "none");
  
  $('.cart_btn').on('click', function () {
    // alert('Successfully Added to cart');
    // $('.cart_btn').attr('disabled', true);

    // document.getElementById("cpu_text").innerHTML = '<span id="selected_product"><a id="cpu_btn" class="btn btn-dark cpu_btn">+ Select</a></span>';
    // document.getElementById("unit_price_cpu").innerHTML = '';
    // document.getElementById('price_cpu').innerHTML = '';
    // document.querySelector(".qty_cpu").innerHTML = '';
    // document.getElementById("delete_btn_cpu").innerHTML = '';

    // document.getElementById("mb_text").innerHTML = '<span id="selected_product"><a id="mb_btn" class="btn btn-dark mb_btn">+ Select</a></span>';
    // document.getElementById("unit_price_mb").innerHTML = '';
    // document.getElementById('price_mb').innerHTML = '';
    // document.querySelector(".qty_mb").innerHTML = '';
    // document.getElementById("delete_btn_mb").innerHTML = '';
    console.log(22);
  });
  
  $('.qty_cpu').on("change", function () {
    document.getElementById('price_cpu').innerHTML = '';
    var qty = document.getElementById('qty_cpu_c').value;
    var unit_price = document.getElementById('unit_price_cpu').innerHTML;
    var total_price = unit_price * qty;
    document.getElementById('price_cpu').innerHTML = total_price;
  });
  $('.qty_mb').on("change", function () {
    document.getElementById('price_mb').innerHTML = '';
    var qty = document.getElementById('qty_mb_c').value;
    var unit_price = document.getElementById('unit_price_mb').innerHTML;
    var total_price = unit_price * qty;
    document.getElementById('price_mb').innerHTML = total_price;
  });

  $(".mb_btn").on("click", function () {
    $("#cpu_table").css("display", "none");
    $("#mb_table").css("display", "block");
  });

  $("#cpu_table .select-btn").on("click", function () {
    var id = $(this).attr("data-id");
    var product = $(this).attr("data-product");
    var price = $(this).attr("data-price");


    document.getElementById("cpu_text").innerHTML = product;
    document.getElementById("unit_price_cpu").innerHTML = price;
    document.getElementById('price_cpu').innerHTML = price;
    document.querySelector(".qty_cpu").innerHTML = "<input type='number' id='qty_cpu_c' class='qty_cpu_c' value='1' style='width:80px'>";
    document.getElementById("delete_btn_cpu").innerHTML = "<a href='#'><i class='fa-solid fa-trash' style='color: #ff0000;'></i></a>";

    $("#cpu_btn").css("display", "none");
  });
  $("#delete_btn_cpu").on("click", function () {
    document.getElementById("cpu_text").innerHTML = '<span id="selected_product"><a id="mb_btn" class="btn btn-dark mb_btn">+ Select</a></span>';
    document.getElementById("unit_price_cpu").innerHTML = '';
    document.getElementById('price_cpu').innerHTML = '';
    document.querySelector(".qty_cpu").innerHTML ='';
    document.getElementById("delete_btn_cpu").innerHTML = '';
    
  });

  $("#mb_table .select-btn").on("click", function () {
    var id = $(this).attr("data-id");
    var product = $(this).attr("data-product");
    var price = $(this).attr("data-price");

    document.getElementById("mb_text").innerHTML = product;
    document.getElementById("unit_price_mb").innerHTML = price;
    document.getElementById('price_mb').innerHTML = price;
    document.querySelector(".qty_mb").innerHTML = "<input type='number' id='qty_mb_c' class='qty_mb_c' value='1' style='width:80px'>";
    document.getElementById("delete_btn_mb").innerHTML = "<a><i class='fa-solid fa-trash' style='color: #ff0000;'></i></a>";
    $("#mb_btn").css("display", "none");
  });
  
  

});
