$(document).ready(function () {
    
     var articles1 = $('.articles1');
  
 
    var input = $('input');
  var text= $('text');
    var button = $('button');
    var toSearch = '';
    var searchUrl = 'https://en.wikipedia.org/w/api.php';
var section = $('<section>');
    
    var ajaxArticleData = function () {
        $.ajax({
            url: searchUrl,
            dataType: 'jsonp',
            data: {
                //main parameters
                action: 'query',
                format: 'json',

                generator: 'search',
              
              prop: 'extracts',
              exchars: 200,
                    //parameters for generator
                    gsrsearch: toSearch,
                    gsrnamespace: 0,
                    gsrlimit: 10,
              
            }

          
        }
              
               )
    
                    

                                var pageElement = $('<div>');



    }
    
     input.autocomplete({
        source: function (request, response) {
            $.ajax({
                url: searchUrl,
                dataType: 'jsonp',
                data: {
                    'action': "opensearch",
                    'format': "json",
                    'search': request.term
                },
                success: function (data) {
                    response(data[1]);
                }
            });
        }
    });
  
  $( "#sleep" ).click(function(e) {
  
    var confirm= document.getElementById("test2").value;
    
  
  

articles1.empty();
var y=0;
  
 
  
    //alert(search);
//ajaxArticleData();
  //articles.append(search);
    
         var search = document.getElementById("test").value;


  $.ajax({
  url: 'http://en.wikipedia.org/w/api.php',
  data: { action: 'query', list: 'search', srsearch: search, srlimit: 500,  prop: 'revisions', rvprop: 'content',  format: 'json'},
  dataType: 'jsonp',
  success: function (x) {
    for(y;y<confirm;y++){
        var site=x.query.search[y].title;
    
        var str=site;
    
    var sit=x.query.search[y].title.replace(/ /g,"_");
     
    
     var result=str.link("http://www.wikipedia.com/wiki/"+sit);
     
    articles1.append( result +"<br>");
   
  }
  }
  }

  
                       )
  

});
})