$("#searchTerm").keypress(function(e){
  
  if(e.keyCode === 13){
    
    var searchTerm=$("#searchTerm").val();
    
    var url= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    
    $.ajax({
      
      url : url,
      type:"GET",
      async :false,
      dataType : "json",
      
      success : function(data){
        console.log(data);
        
        for(var i=0; i<data[1].length;i++){
          
          $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
          
        }//5/ end of the for loop
      }//4 end of the success function
      
    })//3. end of the ajax call
    
    
  }//2. end of the keyCode checking the enter condition
  
  
})//1. end of the keypress function

//using jquery to animate the header
$(window).scroll(function(){
  if($(this).scrollTop() > 1){
    $('header').addClass("getSmall");
  }
  else{
    $('header').removeClass("getSmall");
  }
});
