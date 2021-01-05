
// 1 ///////////////////////////////////////////////////////////////////////////////////////////////
/*    something     */

 document.querySelector(".js-go").addEventListener("click",function(e)
 {
     
    var input = document.querySelector("input").value;
    getdata(input);
 });
 document.querySelector(".js-userinput").addEventListener("keyup",function(e)
 {
  
    var input = document.querySelector("input").value;
    if (e.which === 13)
    {
      getdata(input);
    }
  
 });
 // 2 do api staff///////////////////////////////////////////////////////////////////////////////



function getdata(qwery)
{
    var url = "https://api.giphy.com/v1/gifs/search?q="+qwery+"&api_key=dG6j1DfaWmyrXPPWk5z3YwsMBELSqpXy"
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
 display(data);
});

}




 //3 show me gifs //////////////////////////////////////////////////////////////////////////////


function display(input)
{
    var response = JSON.parse(input);
    var container = document.querySelector(".js-container");

    response.data.forEach(element => {
            var src = element.images.fixed_height.url;
            container.innerHTML += "<img src="+src+"\"class=\"container-image\">";

       
       
    });
   
}