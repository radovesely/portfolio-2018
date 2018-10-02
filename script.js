$(document).on("scroll", function () {

    var pixels = $(document).scrollTop()

    $("img.parallax1").css("top", pixels * -0.50)
    $("img.parallax2").css("top", pixels *  0.30)
    $("img.parallax3").css("top", pixels * -0.25)
    $("img.parallax4").css("top", pixels *  0.40)
    $("img.parallax5").css("top", pixels * -1.15)
    $("img.parallax6").css("top", pixels * 0)
    $("img.parallax7").css("top", pixels * -0.25)
    $("img.parallax8").css("top", pixels * 0.15)
    $("div.shape").css("top", pixels * 0.30)
    $("div.shape-black").css("top", pixels * -0.25)
})

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}






$(document).on("scroll", function () {
    var pixels = $(document).scrollTop()

    var total =$(document).height() - $(window).height()

    var percentage = 100 * pixels / total

    $("div.progress").css("width", percentage + "%")
    })








$(window).on("scroll", function() {
    if($(window).scrollTop() > 3755) {
        $("header , .logo").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header , .logo").removeClass("active");
    }
});
