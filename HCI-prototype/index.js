$('#submit').on('click',function(){

    var h = parseInt($('#height_field').val());
    var w = parseInt($('#weight_field').val());
    h=h/100;
    var bmi = w/(h*h);
    var name = $('#name_field').val();
    console.log(bmi)
    if(!bmi || !name){
        alert("Please Fill All")
    }
    else{
        $('.container .container').css('display','none')
        $('.container1').css('display','block')
        $('#greet').text(`${name}，您好！歡迎你使用魔鏡`)
    }
})

$('#wear').on('click',function(){
    var style = $('#styleWear').val();
    var weather = $('#weather').val();
    if(weather == ">22"){
        weather = "hot";
    }else{
        weather = "cold";
    }
    $.getJSON( "./cloth.json", function( data ) {
        console.log(data.all)
        var array=data.all
        var item=array.filter(array => array.type == style && array.weather == weather)
        if(item.length == 0){
            alert("您的衣櫃裡面暫時沒有這類型的服飾")
        }
        else{
            var random = getRandomInt(item.length)
            $('#pplBody').attr('src',item[random].url);
        }
        
    })
})

$('#modeBuy').on('click',function(){
    $('#dorm').css('display','none');
    $('#buy').css('display','block');
    var name = $('#name_field').val();
    $('#greet2').text(`${name}，您好！歡迎你使用魔鏡`)
    var h = parseInt($('#height_field').val());
    var w = parseInt($('#weight_field').val());
    h=h/100;
    var bmi = w/(h*h);
    console.log(bmi)
    if(bmi<19){
        $('#pplBodyBuy').attr('src','./body/thin.png');
    }
    else if(bmi>18 && bmi<25){
        $('#pplBodyBuy').attr('src','./body/normal.png');
    }
    else if(bmi>24){
        $('#pplBodyBuy').attr('src','./body/fat.png');
    }
})

$('#wearBuy').on('click',function(){
    var size = $('#size').val();
    var body = $('#pplBodyBuy').attr('src',);
    if(body == './body/normal.png'){
        if(size == 's'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','200px')
        $('#cloth').css('margin-left','70px')
        $('#cloth').css('margin-top','34px')
        }
        else if(size == 'm'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','220px')
        $('#cloth').css('margin-left','65px')
        $('#cloth').css('margin-top','34px')
        }
        else if(size == 'l'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','240px')
        $('#cloth').css('margin-left','60px')
        $('#cloth').css('margin-top','34px')
        }
    }
    if(body == './body/fat.png'){
        if(size == 's'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','200px')
        $('#cloth').css('margin-left','70px')
        $('#cloth').css('margin-top','50px')
        }
        else if(size == 'm'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','220px')
        $('#cloth').css('margin-left','65px')
        $('#cloth').css('margin-top','50px')
        }
        else if(size == 'l'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','240px')
        $('#cloth').css('margin-left','52px')
        $('#cloth').css('margin-top','46px')
        }
    }
    if(body == './body/thin.png'){
        if(size == 's'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','200px')
        $('#cloth').css('margin-left','70px')
        $('#cloth').css('margin-top','50px')
        }
        else if(size == 'm'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','220px')
        $('#cloth').css('margin-left','65px')
        $('#cloth').css('margin-top','50px')
        }
        else if(size == 'l'){
        $('#cloth').attr('src','./body/shirt.png')
        $('#cloth').css('height','240px')
        $('#cloth').css('margin-left','52px')
        $('#cloth').css('margin-top','46px')
        }
    }
    
    console.log(body)
})

$('#modeDorm').on('click',function(){
    $('#dorm').css('display','block');
    $('#buy').css('display','none');
})
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

$('#modeDisplay').on('click',function(){
    var check = $('#product-list').html();
    if(!check){
        $.getJSON( "./cloth.json", function( data ) {
        console.log(data.all)
        var array=data.all
        var header = `<h2 id="MyWardrobe">我的衣櫃</h2><br>`
        $('#pplBody').after(header);
        var myArray = {"casual": "休閒", "school": "學校", "formal": "正式","sport": "運動"};
        for(var i = 0;i<array.length;i++){
            var key =(array[i].type)
            console.log(key)
            console.log(myArray[key])
            var li = `<div class="col-*"><div class="item"><img src="${array[i].url}" class="image"><h3 class="name">風格：${myArray[key]}</h3></div></div>`;
            $('#product-list').append(li);
        }
        })
    }
    else{
        $('#product-list').empty();
        $('#MyWardrobe').remove();
    }
    
})