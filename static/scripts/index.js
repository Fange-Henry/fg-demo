/**
 * Created by HenryGe on 14/12/4.
 */
$(document).ready(function(){

$("button").click(function () {

    if($("body").hasClass("home"))
    {
        if($(this).hasClass("nav-right"))
        {
            $("body").removeClass().addClass("search")
            return false
        }
        if($(this).hasClass("pic-1"))
        {
            $("body").removeClass().addClass("dish-1")
            return false
        }
        if($(this).hasClass("pic-2"))
        {
            $("body").removeClass().addClass("dish-2")
            return false
        }
        if($(this).hasClass("pic-3"))
        {
            $("body").removeClass().addClass("dish-3")
            return false
        }
        if($(this).hasClass("tab-1"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("tab-3"))
        {
            $("body").removeClass().addClass("account")
            return false
        }
    }

    if($("body").hasClass("dish-1")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("btn-profile"))
        {
            $("body").removeClass().addClass("profile")
            return false
        }
        if($(this).hasClass("tab-1"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("tab-3"))
        {
            $("body").removeClass().addClass("account")
            return false
        }
    }

    if($("body").hasClass("dish-2")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-1"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("tab-3"))
        {
            $("body").removeClass().addClass("account")
            return false
        }
    }

    if($("body").hasClass("dish-3")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-1"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("tab-3"))
        {
            $("body").removeClass().addClass("account")
            return false
        }
    }

    if($("body").hasClass("profile")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("dish-1")
            return false
        }
        if($(this).hasClass("tab-1"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("tab-3"))
        {
            $("body").removeClass().addClass("account")
            return false
        }
    }

    if($("body").hasClass("search")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("btn-search"))
        {
            $("body").removeClass().addClass("result")
            return false
        }
        if($(this).hasClass("tab-1"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("tab-3"))
        {
            $("body").removeClass().addClass("account")
            return false
        }
    }

    if($("body").hasClass("result")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("search")
            return false
        }
        if($(this).hasClass("tab-1"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("tab-3"))
        {
            $("body").removeClass().addClass("account")
            return false
        }
    }

    if($("body").hasClass("account")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-1"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("tab-3"))
        {
            $("body").removeClass().addClass("account")
            return false
        }
    }

    if($("body").hasClass("photo")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("edit")
            return false
        }
    }

    if($("body").hasClass("edit")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("photo")
            return false
        }
        if($(this).hasClass("nav-right"))
        {
            $("body").removeClass().addClass("upload")
            return false
        }
    }

    if($("body").hasClass("upload")){
        if($(this).hasClass("nav-left"))
        {
            $("body").removeClass().addClass("edit")
            return false
        }
        if($(this).hasClass("nav-right"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
        if($(this).hasClass("tab-2"))
        {
            $("body").removeClass().addClass("home")
            return false
        }
    }

})

});