$(document).ready(function() {
    // Event listener for quantity and price inputs
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });

    // Event listener for plus button
    $('.cart-qty-plus').on('click', function() {
        var $qty = $(this).siblings('.qty');
        $qty.val(parseInt($qty.val()) + 1);
        update_amounts();
    });

    // Event listener for minus button
    $('.cart-qty-minus').on('click', function() {
        var $qty = $(this).siblings('.qty');
        var qtyVal = parseInt($qty.val());
        if (qtyVal > 0) {
            $qty.val(qtyVal - 1);
            update_amounts();
        }
    });
});

function update_amounts() {
    var sum = 0.0;
    $('#myTable tbody tr').each(function() {
        var qty = parseFloat($(this).find('.qty').val()) || 0; // Parse quantity as float, default to 0 if parsing fails
        var price = parseFloat($(this).find('.price').val()) || 0; // Parse price as float, default to 0 if parsing fails
        var amount = qty * price;
        sum += amount;
        $(this).find('.amount').text(amount.toFixed(2));
    });
    $('.total').text(sum.toFixed(2));
}

