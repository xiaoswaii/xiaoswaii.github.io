$("button").click(function() {
    var a = $("#n").val();
    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            $("#result").val(a + " is not a prime");
            break;
        } else {
            $("#result").val(a + " is a prime");
        }
    }
})