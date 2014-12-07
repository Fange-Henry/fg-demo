/**
 * Created by HenryGe on 14/12/4.
 */
$(document).ready(function(){

    $(".tab-1").click(function () {
        $("body").removeClass("detail").removeClass("profile").addClass("home");
    });

    $(".tab-2").click(function () {
        $("body").removeClass("detail").removeClass("profile").removeClass("home").addClass("camera");
    });

    $(".tab-3").click(function () {
        $("body").removeClass("home").removeClass("detail").addClass("profile");
    });

    $(".container").click(function(){
        if($("body").hasClass("home")){
            $("body").removeClass("home").addClass("detail");
        }
        if($("body").hasClass("camera")){
            $("body").removeClass("camera").addClass("edit");
        }
        if($("body").hasClass("edit")){
            $("body").removeClass("edit").addClass("upload");
        }
        if($("body").hasClass("search")){
            $("body").removeClass("search").addClass("result");
        }
    });

    $(".nav-left").click(function(){
        if($("body").hasClass("detail")) {
            $("body").removeClass("detail").addClass("home");
        }
        if($("body").hasClass("camera")) {
            $("body").removeClass("camera").addClass("home");
        }
        if($("body").hasClass("edit")) {
            $("body").removeClass("edit").addClass("camera");
        }
        if($("body").hasClass("upload")) {
            $("body").removeClass("upload").addClass("edit");
        }
        if($("body").hasClass("search")) {
            $("body").removeClass("search").addClass("home");
        }
        if($("body").hasClass("result")) {
            $("body").removeClass("result").addClass("search");
        }
    });

    $(".nav-right").click(function(){
        if($("body").hasClass("home")) {
            $("body").removeClass("home").addClass("search");
        }
    });

});