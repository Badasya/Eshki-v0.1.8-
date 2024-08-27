let PlusList = document.querySelector('.header-plus');

document.querySelector('.btn-header-nav').addEventListener('click', function(){
    if(PlusList.style.left == '-500px'){
        PlusList.style.left = '0';
    }else{
        PlusList.style.left = '-500px';
    }
})