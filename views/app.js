
$(function() {

  console.log("is it loading");



  axios.get('http://www.reddit.com/r/DrunkOrAKid/hot.json?sort=hot')
  .then(function(data){
    var q;
    for(var i = 2; i < data.data.data.children.length; i++){
      q = data.data.data.children[i];
      $('#main').append(
        '<h4>' + q.data.title + '</h4><br>' +
        '<button class="btn btn-success trigger" id="trigger' + i + '" value="' + i + '">answer</button>' +
        '<div class="answer" id="answer' + i + '">'+ q.data.selftext +'</div>')


      $('#answer' + i).hide()

      $("#main").on("click", ".trigger", showAnswer);

      // $('#trigger' + i).click(function(e){
      //   e.preventDefault()
      //   console.log("clicked", i);
      //   $('#answer' + i).show()
      // })
    }
  }).catch(function(error){
    console.log("error occured")
  })

  function showAnswer() {
    var value = this.value;
    $('#trigger' + value).click(function(){
      console.log("clicked", value);
      $('#answer' + value).show()
    })
  }
})

//  $(function(){
//
// axios.get('http://www.reddit.com/r/DrunkOrAKid/hot.json?sort=hot')
//     .then(function(data) {
//         var $main = $('#main');
//
//         //use slice so you can use forEach instead of rolling your own for loop
//         data.data.data.children.slice(2).forEach(function(child){
//             //instead of looking up trigger, create it so you can do whatever you want with it
//             var $trigger = $('<button class="btn btn-success">answer</button>');
//             //same with answer
//             var $answer = $('<div class="answer">'+ child.data.selftext +'</div>');
//
//             var $close = $('<button class="btn btn-danger">X</button>');
//
//             $close.hide()
//             $answer.hide();
//
//             $trigger.on('click', function(e){
//                 e.preventDefault();
//                 $answer.show();
//                 $close.show();
//             });
//
//             $close.on('click', function(e){
//               e.preventDefault();
//               $answer.hide();
//               $close.hide();
//             });
//
//
//             $main
//                 .append('<h4>'+ child.data.title +'</h4><br>')
//                 .append($trigger)
//                 .append($close)
//                 .append($answer);
//         });
//     }).catch(function(error) {
//         console.log("error occured")
//     });
// });
