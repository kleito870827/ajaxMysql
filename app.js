//MYSQL
// $.ajax({
//   url: 'http://localhost:9999/tasks',
//   success: function(resp, txt, xhr){
//     var obj = JSON.parse(resp)
//     console.log(obj);
//     for (var i = 0; i < obj.length ; i++){
//       if(obj[i].status == 'new'){
//          $('#new').append('<h4>'+ obj[i].description+ ' -id '+obj[i].id +'</h4>');
//          $('#new').append(` <div class="btn-group" id="id`+ obj[i].id +`"role="group">
//                               <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 SEND
//                                 <span class="caret"></span>
//                               </button>
//                               <ul class="dropdown-menu">
//                                 <li><a class="click" href="`+obj[i].id+`">STARTED</a></li>
//                                 <li><a class="click" href="`+obj[i].id+`">COMPLETED</a></li>
//                                 <li><a class="click" href="`+obj[i].id+`">DELETE</a></li>
//                               </ul>
//                             </div>`);
//       }else if (obj[i].status == 'started'){
//          $('#started').append('<h4>'+ obj[i].description+' -id '+obj[i].id +'</h4>');
//          $('#started').append(` <div class="btn-group" id="id`+ obj[i].id +`"role="group">
//                               <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 SEND
//                                 <span class="caret"></span>
//                               </button>
//                               <ul class="dropdown-menu">
//                                 <li><a class="click" href="`+obj[i].id+`">NEW</a></li>
//                                 <li><a class="click" href="`+obj[i].id+`">COMPLETED</a></li>
//                                 <li><a class="click" href="`+obj[i].id+`">DELETE</a></li>
//                               </ul>
//                             </div>`);
//       }else{
//          $('#completed').append('<h4>'+ obj[i].description+' -id '+obj[i].id +'</h4>');
//          $('#completed').append(` <div class="btn-group" id="id`+ obj[i].id +`"role="group">
//                               <button id='prueba' type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 SEND
//                                 <span class="caret"></span>
//                               </button>
//                               <ul class="dropdown-menu">
//                                 <li><a class="click" href="`+obj[i].id+`">NEW</a></li>
//                                 <li><a class="click" href="`+obj[i].id+`">STARTED</a></li>
//                                 <li><a class="click" href="`+obj[i].id+`">DELETE</a></li>
//                               </ul>
//                             </div>`);
//       }
//
//     };
//     $(".click").on("click", function (){
//       event.preventDefault();
//       var change = $(this).text().toLowerCase();
//       var getId = $(this).attr("href");
//       if(change == "delete"){
//         $.ajax({
//           url: `http://localhost:9999/tasks/`+getId,
//           success: function(resp,txt,xhr){
//           console.log(resp);
//           },
//           method: 'DELETE'
//         })
//       }else{
//         $.ajax({
//         url: `http://localhost:9999/tasks/`+getId+`/`+change,
//         success: function(resp,txt,xhr){
//         console.log(resp);
//         },
//         method: 'PUT'
//       })
//       }
//
//       location.reload();
//     });
//     $("#create").on("click", function (){
//       var description = $("#description").val().toLowerCase();
//       var uid = $("#uid").val();
//       var status = $("#status").val().toLowerCase();
//       console.log(description+uid+status);
//       if(description != "" && uid != "" && status != ""){
//         if(status == "new" || status == "started" || status == "completed"){
//           $.ajax({
//             url: `http://localhost:9999/tasks/`+description+`/`+uid+`/`+status,
//             success: function(resp,txt,xhr){
//             console.log(resp);
//             },
//             method: 'POST'
//           })
//         }else{
//           alert("status new completed started");
//         }
//
//       }else{
//         alert("you have the text box empty");
//       }
//       location.reload();
//     });
//     $("#create").keyup(function (d){
//       if(d.keycode == 13){
//         console.log("");
//         ("#create").click();
//       }
//     })
//   }
//
// });

//mongodb

$.ajax({
  url: 'http://localhost:3000/tasks',
  success: function(resp, txt, xhr){
    var obj = resp
    console.log(obj);
    for (var i = 0; i < obj.length ; i++){
      if(obj[i].status == 'new'){
         $('#new').append('<h4>'+ obj[i].description+'</h4>');
         $('#new').append(` <div class="btn-group" id="id`+ obj[i]._id +`"role="group">
                              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SEND
                                <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="click" href="`+obj[i]._id+`">STARTED</a></li>
                                <li><a class="click" href="`+obj[i]._id+`">COMPLETED</a></li>
                                <li><a class="click" href="`+obj[i]._id+`">DELETE</a></li>
                              </ul>
                            </div>`);
      }else if (obj[i].status == 'started'){
         $('#started').append('<h4>'+ obj[i].description+'</h4>');
         $('#started').append(` <div class="btn-group" id="id`+ obj[i]._id +`"role="group">
                              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SEND
                                <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="click" href="`+obj[i]._id+`">NEW</a></li>
                                <li><a class="click" href="`+obj[i]._id+`">COMPLETED</a></li>
                                <li><a class="click" href="`+obj[i]._id+`">DELETE</a></li>
                              </ul>
                            </div>`);
      }else{
         $('#completed').append('<h4>'+ obj[i].description+'</h4>');
         $('#completed').append(` <div class="btn-group" id="id`+ obj[i]._id +`"role="group">
                              <button id='prueba' type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SEND
                                <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="click" href="`+obj[i]._id+`">NEW</a></li>
                                <li><a class="click" href="`+obj[i]._id+`">STARTED</a></li>
                                <li><a class="click" href="`+obj[i]._id+`">DELETE</a></li>
                              </ul>
                            </div>`);
      }

    };
    $(".click").on("click", function (){
      console.log('hello');
      event.preventDefault();
      var change = $(this).text().toLowerCase();
      var getId = $(this).attr("href");
      if(change == "delete"){
        $.ajax({
          url: `http://localhost:3000/tasks/`+getId,
          success: function(resp,txt,xhr){
          console.log(resp);
          },
          method: 'DELETE'
        })
      }else{
        $.ajax({
        url: `http://localhost:3000/tasks/`+getId,
        method: 'PUT',
          data:{
          status: change
        },
        success: function(resp,txt,xhr){
        console.log(resp);

      }
    })
  }

      location.reload();
    });
    $("#create").on("click", function (){
      var description = $("#description").val().toLowerCase();
      var uid = $("#uid").val();
      var status = $("#status").val().toLowerCase();
      console.log(description+uid+status);
      if(description != "" && uid != "" && status != ""){
        if(status == "new" || status == "started" || status == "completed"){
          $.ajax({
            url: `http://localhost:3000/tasks`,
            method: 'POST',
            data:{
              description: description,
              uid: uid,
              status: status
            },
            success: function(resp){
            console.log(resp);
            }
          })
        }else{
          alert("status new completed started");
        }

      }else{
        alert("you have the text box empty");
      }
      location.reload();
    });
    $("#create").keyup(function (d){
      if(d.keycode == 13){
        console.log("");
        ("#create").click();
      }
    })
  }

});
