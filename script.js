const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

/*--------------------------------------------------------*/



const nome = document.querySelector('#nome')
const msg = document.querySelector('#expanding-textarea')


document.getElementById('submitForm').addEventListener('click', (e) => {
    e.preventDefault()
    enviaMsgWhats(nome, msg)
});

document.getElementById('whatsapp').addEventListener('click', enviaMsgWhats);
document.getElementById('whatsapp3').addEventListener('click', enviaMsgWhats);



function enviaMsgWhats(nome, msg) {

    let message = 'Oi, vim pelo site!'
    var phone_number = "55" + "62 986346334";


    if (nome, msg) {
        message = `Olá, meu nome é ${nome.value}, vim pelo site! ${msg.value}`
    }


    var url = "https://api.whatsapp.com/send?phone=" + phone_number + "&text=" + encodeURIComponent(message);

    window.open(url);


}


/*---------------------TEXTAREA=-------------*/

document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'expanding-textarea') {
        autoExpand(e.target);
    }
});

function autoExpand(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}