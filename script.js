var p1 = document.querySelectorAll("#projects a")//$("a.p-1")
var shape = document.querySelector("div.shape")
var shapeBlack = document.querySelector("div.shape-black")

$(document).on("scroll", function () {
  if(window.matchMedia("(min-width: 830px)").matches){
        var pixels = $(document).scrollTop()
        p1[0].style.transform = "translateY("+pixels * -0.50+"px)"
        p1[1].style.transform = "translateY("+pixels * 0.10+"px)"
        p1[2].style.transform = "translateY("+pixels * 0+"px)"
        p1[3].style.transform = "translateY("+pixels * 0.1+"px)"
        p1[4].style.transform = "translateY("+pixels * -0.80+"px)"
        p1[5].style.transform = "translateY("+pixels * -0.30+"px)"
        p1[6].style.transform = "translateY("+pixels * -0.25+"px)"
        p1[7].style.transform = "translateY("+pixels * 0.10+"px)"
        shapeBlack.style.transform = "translateY("+pixels * -0.25+"px)"
    } else {
        p1.forEach(p=>p.style.transform = "translateY(0)")
    }
    /*$("a.p-2").css("top", pixels *  0)
    $("a.p-3").css("top", pixels * -0.25)
    $("a.p-4").css("top", pixels * 0.1)
    $("a.p-5").css("top", pixels * -0.80)
    $("a.p-6").css("top", pixels * 0)
    $("a.p-7").css("top", pixels * -0.25)
    $("a.p-8").css("top", pixels * 0.15)

    $("div.shape").css("top", pixels * 0.30)
    $("div.shape-black").css("top", pixels * -0.25)*/
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
