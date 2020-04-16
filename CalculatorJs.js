var memory=0;
var memoryclac;
var c = false;
var flag = false;



var screenn = function(p){
    if(p=="." && flag == true){
        return;
    }
    if(c==true){
        $("#screen").val('');
        c = false;
    }
    var r = $("#screen").val()+p;
    if(p == "."){
        flag = true;
    }
    else{
        r = r * 1;
    }
    $("#screen").val(r);
}

var calculate = function(p){
    if(memory==0){
        result();
    }
    flag = false;
    c = true;
    memory = parseFloat($("#screen").val());
    memoryclac = p;
}

$('#clear').click(function(){
    memory = 0;
    $("#screen").val('');
});
$('#sign').click(function(){
    $("#screen").val($("#screen").val()*-1)
});
$('#backspace').click(function(){
   var len = $('#screen').val().length;
   $('#screen').val($('#screen').val().substring(0,len - 1));
   if($('#screen').val().length == 0){
    $('#screen').val(0)
   }
});

var result = function(){
    if(memory == 0){
        return;
    }
    c= true;
    var r ;
    var value = parseFloat($("#screen").val())
    switch(memoryclac){
       
        case '+' :
            r = memory + value;
            break;
        case '-':
            r = memory - value;
            break;
        case '*':
            r = memory * value;
            break;
        case '/':
            r = memory / value;
            break;
        default:
    }
    screenn(r);
    c= true;
    flag = false;
    memory =0;
};

$('.digits').click(function(e){
    screenn(e.target.value);
})

$('#divide,#multiply,#minus,#plus').click(function(e){
    calculate(e.target.value);
})

$('#equal').click(function(){
    result();
})


