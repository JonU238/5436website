$("#menu").click(function() {
  if ($("nav").hasClass("responsive")) {
    $("nav, html").removeClass("responsive");
  } else {
    $("nav, html").addClass("responsive")
  }
})
$("html").append("<a id='corona' href='volunteering.html#coronaEfforts'>COVID-19 Efforts</a>")
