var response = {
  data: [
    { message: "Hello World" },
    { message: "One man's constant is another man's variable." },
    { message: "Syntactic sugar causes cancer of the semicolon." }
  ]
};

$(document).ready(function(){

  /*
   * Can you append _every_ message in
   * response data to the target container
   * in index.html, using a loop?
  */
  var items = response.data;

  //jquery solution
  // function render(items) {
  //   $.each(items, function (i, l){
  //     $('#target').append("<p>" + l.message + "</p>");
  //   });
  // }
  //
  render(items);

  //javascript solution
  items.forEach(function(item){
    $('#target').append("<p>" + item.message + "</p>");
  });

});
