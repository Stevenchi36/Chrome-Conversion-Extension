function message(val) {
  $(".message").text(val);
}
//Add something to test GitHub
//set input to previously saved value
chrome.storage.local.get("definedURL", function(result){
    if(result.definedURL!=undefined){
      $(".urlinput").attr("placeholder",result.definedURL);
    }else{
      $(".urlinput").attr("placeholder","type url here...");
    }
});

//handle update
  $(".urlbutton").click(function(){
    $(".message").text($(".urlinput").val());
    chrome.storage.local.set({'definedURL': $(".urlinput").val()}, function() {
          // Notify that we saved.
          message('Settings saved');
          //google tracking here
        });
   });
