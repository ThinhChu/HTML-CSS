document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.header');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 100){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('nav-fixed');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('nav-fixed');
            trangthai="duoi300";}
        }
    
    })
})