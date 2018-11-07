$("button").click(function() {
    var h = $("#height").val();
    var w = $("#weight").val();
    h = h / 100;
    var bmi;
    bmi = w / (h * h);
    $("#result").val(bmi);
})