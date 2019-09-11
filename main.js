const redditTemplate =  Handlebars.compile(
  document.getElementById('reddit_template').innerHTML
);

Handlebars.registerHelper('formatted-data', function(data){
  return(data.toLocaleString());
});


$("form").submit(function(e){
  e.preventDefault();
  var searchItem = $('#search_text').val();
  $('#results').html('<div class="loader">Loading...</div>')
  let promise =  $.ajax({
    type : 'GET',
    url: "https://www.reddit.com/r/" + searchItem + ".json"
  });
  promise.then(function(data){
    let sanitizedHtml = redditTemplate({ data });
    console.log(sanitizedHtml);
    $('#results').html(sanitizedHtml);
  });
});
