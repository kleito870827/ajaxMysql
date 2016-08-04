$.ajax({
  url: 'http://localhost:9999/tasks',
  success: function(resp, txt, xhr){
    var obj = JSON.parse(resp)
    console.log(obj);
    for (var i = 0; i < obj.length ; i++){
        $('#new').append('<h4>'+ obj[i].description +'</h4>');
    }

  }
});
