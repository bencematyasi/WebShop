$(function (){

    var $products = $('#product_area');

    $.ajax({
        type: 'GET',
        url: 'https://ipcsmmd-webshopapp-group23-easv.azurewebsites.net/api/products',
        success: function(products) {
            $.each(products, function(index, prod) {
                    $products.append(
                        "<div class ='product'>" +
                            "<div class='product_img'>" +
                                "<img src='" + prod.image +"'></div>" +
                            "<div class='product_price'>" +
                                "<h2>" + prod.price+" DKK</h2>"+

                             "<div class='product_buy'><a style='text-decoration:none' onclick='openDetailPage(" + prod.id + ")' target='_self'>BUY</a>"+
                    "</div>"+
                   " </div>")
                })},
        });

    });
    function openDetailPage(id) {
        window.location = 'page3.html?id=' + id ;
    }

