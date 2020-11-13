var nav = document.querySelector(".header_nav");
if (window.scrollY){
window.scroll(0,0);
}


document.body = document.getElementsByTagName('body');
document.body.css('overflow', 'hidden');
document.body.bind('mousewheel', function(e){
    document.body.scrollTop(document.body.scrollTop() + 100);
});