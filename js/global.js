$("#menu").click(function() {
  if ($("nav").hasClass("responsive")) {
    $("nav, html").removeClass("responsive");
  } else {
    $("nav, html").addClass("responsive")
  }
})
$("html").append("<a id='important' href='mark.html'>Current Robot</a>")
