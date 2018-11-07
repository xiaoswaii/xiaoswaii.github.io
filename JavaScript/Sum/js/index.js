$("#input").click(function() {
    var number = $("#input-text").val();
    $item = $("<div>").attr("class", "item").text(number);
    $col = $("<div>").attr("class", "col-1").append($item);
    $("#data").append($col);
})

$("#clear").click(function() {
    $("#data").empty();
})

$("#compute").click(function() {
    var a = $("#data .item");
    var b = [];
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < a.length; i++) {
        b[i] = Number($(a[i]).text());
        sum = sum + b[i];
        console.log(b[i]);
    }
    avg = sum / a.length;
    $("#result-sum").val(sum);
    $("#result-avg").val(avg);
})