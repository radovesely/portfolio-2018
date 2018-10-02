$(document).on("scroll", function () {

    var pixels = $(document).scrollTop()

    $("a.p-1").css("top", pixels * -0.50)
    $("a.p-2").css("top", pixels *  0)
    $("a.p-3").css("top", pixels * -0.25)
    $("a.p-4").css("top", pixels * 0.1)
    $("a.p-5").css("top", pixels * -0.80)
    $("a.p-6").css("top", pixels * 0)
    $("a.p-7").css("top", pixels * -0.25)
    $("a.p-8").css("top", pixels * 0.15)
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
