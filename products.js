$(function (){

    fillProducts();
});

function fillProducts(){

    var $products = $('#products');
    var $productsbody = $('#products tbody');

    $.ajax({
        type: 'GET',
        url: 'https://ipcsmmd-webshopapp-group23-easv.azurewebsites.net/api/products',
        success: function(products) {
            $productsbody.empty();
            $.each(products, function(index, product) {
                $products.append(
                    '<tr><td>' + product.id + ' </td>' +
                    '<td>' + product.name + ' </td>' +
                    '<td> ' + product.category + ' </td>' +
                    '<td> ' + product.price + ' </td>' +
                    '<td> ' + product.stock + ' </td>' +
                    '<td> ' + product.description + ' </td>' +
                    '<td> ' + product.size + ' </td>' +
                    '<td> ' + product.image + '</td>' +
                    '<td><button onclick="deleteProduct('+product.id+')">Delete</button></td>' +
                    '<td><button onclick="updateProduct('+product.id+')">Update</button></td>' +
                    '</tr>');
            });
        },
        error: function(){
            alert('error loading products');
        }
    });
}

function addProduct(){

    var $name = $('#name');
    var $category = $('#category');
    var $price = $('#price');
    var $stock = $('#stock');
    var $description = $('#description');
    var $size = $('#size');
    var $imgurl = $('#imgurl');

    var product = {
        name: $name.val(),
        category: $category.val(),
        price: parseFloat($price.val()),
        stock: parseInt($stock.val()),
        description: $description.val(),
        size: parseInt($size.val()),
        image: $imgurl.val()
    };

    $.ajax({
        type: 'POST',
        url: 'https://ipcsmmd-webshopapp-group23-easv.azurewebsites.net/api/products',
        data: JSON.stringify(product),
        contentType: 'application/json',
        processData: false,
        success: function() {
            alert('Product added');
            fillProducts();
        },
        error: function(request, message, error) {
            alert('error creating product' + message);
        }
    });
}

function updateProduct(id){

    var $name = $('#name');
    var $category = $('#category');
    var $price = $('#price');
    var $stock = $('#stock');
    var $description = $('#description');
    var $size = $('#size');
    var $imgurl = $('#imgurl');

    var product = {
        id: id,
        name: $name.val(),
        category: $category.val(),
        price: parseFloat($price.val()),
        stock: parseInt($stock.val()),
        description: $description.val(),
        size: parseInt($size.val()),
        image: $imgurl.val()
    };

    $.ajax({
        type: 'PUT',
        url: 'https://ipcsmmd-webshopapp-group23-easv.azurewebsites.net/api/products'+id,
        data: JSON.stringify(product),
        contentType: 'application/json',
        processData: false,
        success: function() {
            alert('Product updated');
            fillProducts();
        },
        error: function(request, message, error) {
            alert('error creating product' + message);
        }
    });
}

function deleteProduct(id) {
    $.ajax({
        type: 'DELETE',
        url: 'https://ipcsmmd-webshopapp-group23-easv.azurewebsites.net/api/products'+id,
        success: function() {
            alert('Product deleted');
            fillProducts();
        },
        error: function(error) {
            alert('error occurred while deleting a product');
        }
    })
}