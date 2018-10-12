$(document).ready(function () {
    var param = new URLSearchParams(window.location.search);
    console.log(param);
    if(!param.has('id')){
        alert('Cannot retrieve values');
        window.close();

    }
    else{
        var id = param.get('id');
        getData(id);
    }

    function getData(id) {
        $.ajax({
            type:  "GET",
            url: 'https://ipcsmmd-webshopapp-group23-easv.azurewebsites.net/api/products/' + id,
            dataType: "json",
            success : function (product) {
                buildProduct(product)

            },
            error: function () {
                console.log("Error occured");
            }
        })
    function buildProduct(product) {
            var showProd =


                "<div id='product_img'>" +
                    "<img src='"+ product.image+ "'>" +
                "</div>" +
                "<div  id='product_price'>" +
                     "<h2>" + product.price+" DKK</h2>"+
                "</div>" +
                "<div id='product_desc'>" +
                    "<span>" + product.description + "</span>" +
                "</div>"+
                "<div class='product_buy'>" +
                    "<a href='page4.html' style='text-decoration:none' target='self'>BUY</a>" +
                "</div>";



        $('#product').append(showProd);
        console.log(showProd);
    }
    }

});