var text = "";
$.getJSON('test_data.json', function (data) {
    for(i=0;i<5;i++){
  text += "<div class=\"col-md-5 jumbotron\"><a href=page.php?id="+i+"><h1>"+data.memes[i].name+"</h1></a><br><img class=\"meme\" src="+data.memes[i].file+" /><br><br><p>"+data.memes[i].description+"</p><br><a href=\""+data.memes[i].file+"\" download><button class=\"btn btn-success\">DOWNLOAD</button></a><button class=\"btn btn-warning\">SHARE</button></div><br>";
}
});
document.write(`<!DOCTYPE html>
  <html>
    <head>
      <!-- resizing screen for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--importing css to html-->
      <link rel="stylesheet" type="text/css" href="index.css">
      
      <title>3dankmemes</title>
      
    </head>
    <body>
    <div id="header"><p class="hak">5 memes</p></div><center><div class="container-fluid"><br>
    `+text+`
    </div>
    </body>
  </html>
`);


