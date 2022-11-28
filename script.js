let titre = document.querySelector('h1')
let backgroundRgb = document.querySelector('input[name="color"]');
let padding = document.querySelector('input[name="padding"]');
let height = document.querySelector('input[name="height"]');
let width = document.querySelector('input[name="width"]');
let arrondi = document.querySelector('input[name="radius"]');
let rotation = document.querySelector('input[name="rotation"]');

function change(element){
    switch(element){
        case backgroundRgb:
            titre.style.background = "rgb(" + backgroundRgb.value + "," + backgroundRgb.value +"," + backgroundRgb.value + ")";
        break;
        case padding:
            titre.style.padding = padding.value + "px";
        break;
        case height:
            titre.style.height = height.value + "px";
        break;
        case width:
            titre.style.width = width.value + "px";
        break;
        case arrondi:
            titre.style.borderRadius = arrondi.value + "px";
        break;
        case rotation:
            titre.style.transform = "rotate("+ rotation.value + "deg)";
        break;
    }
}


/*
//---------------------------V1

backgroundRgb.addEventListener('change', function(){
    titre.style.background = "rgb(" + backgroundRgb.value + "," + backgroundRgb.value +"," + backgroundRgb.value + ")";
});

padding.addEventListener('change', function(){
    titre.style.padding = padding.value + "px";
});

rotation.addEventListener('change', function(){
    titre.style.transform = "rotate("+ rotation.value + "deg)";
})

width.addEventListener('change', function(){
    titre.style.width = width.value + "px"
})

height.addEventListener('change', function(){
    titre.style.height = height.value + "px";
})

arrondi.addEventListener('change', function(){
    titre.style.borderRadius = arrondi.value + "px";
})*/
