$(function(){

    fillOrders(1, 5);
});

function fillOrders(cp, ipp) {

    var $orders = $('#orders');
    var $orderbody = $('#orders tbody');

    $.ajax({
        type: 'GET',
        url: 'https://ipcsmmd-webshopapp-group23-easv.azurewebsites.net/api/orders?CurrentPage='+cp+'&ItemsPrPage='+ipp,
        success: function (orders) {
            $orderbody.empty();
            $.each(orders, function (index, order) {
                $orders.append(
                    '<tr><td>' + order.id + ' </td>' +
                    '<td>' + order.firstName + ' </td>' +
                    '<td> ' + order.lastName + ' </td>' +
                    '<td> ' + order.address + ' </td>' +
                    '<td> ' + order.zipCode + ' </td>' +
                    '<td> ' + order.country + ' </td>' +
                    '<td> ' + order.product + ' </td>' +
                    '<td> ' + order.quantity + '</td>' +
                    '<td><button onclick="deleteOrder('+order.id+')">Fulfill</button></td>' +
                    '</tr>');
            });
        },
        error: function () {
            alert('error loading products');
        }
    });
}

function deleteOrder(id) {
    $.ajax({
        type: 'DELETE',
        url: 'https://ipcsmmd-webshopapp-group23-easv.azurewebsites.net/api/orders/'+id,
        success: function() {
            alert('Order deleted');
            fillOrders(1,5);
        },
        error: function(error) {
            alert('error occurred while deleting an order');
        }
    })
}