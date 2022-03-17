var click = $(".change");
var lan = document.getElementById("language");
var intro = $("#intro p");
var hiding = $(".hide a");
var introv1 = $("#intro");
var inner_h1 = $(".inner h1");
var inner_p = $(".inner p");
var email = $("#email");
var phone = $("#phone");

hiding.click( () => {
    click.fadeOut();
})

$(".close").click( () => {
    click.fadeIn();
});

function Change(){
    if (lan.innerHTML === 'EN'){
        lan.innerHTML = 'MK';
        intro.text("Hello, my name is Sashka, I'm 37 years old from Skopje-Macedonia. With many years of work experience in the field of interior design. Graduated from Architecture and Higher Education - Design and Interior. With more than 2 years of work experience in 3D CIMEMA4D and preparation of technical realization and basics in 2D AutoCAD as well as extensive work experience in production plant for furniture.");
        $("#intro").text("Intro");
        $("#work").text("Work");
        $("#contact").text("Contact");
        inner_h1.text("Sashka Trajkovski");
        inner_p.html("Welcome to my portfolio <br> for interior design");
        $("#intro .major").text("Intro");
        $("#work .major").text("Work");
        $("#contact .major").text("Contact");
        $("#work p").html("I have multiple cites that i show and grow my work where some of them are <a target='_blank' href='https://www.behance.net/sashkatrajkov'> Behance</a>, <a target='_blank' href='https://www.instagram.com/onlineinteriordesign__/?hl=en'>Instagram</a> and <a target='_blank' href='https://www.facebook.com/saska.madnes'> Facebook</a> <br> Also you can see some part of my work here:")
        email.text("E-mail:");
        phone.text("Phone:");
    }   
    else if (lan.innerHTML === 'MK'){
        lan.innerHTML = 'EN';
        intro.text("Здраво, јас сум Сашка, имам 37 години од Скопје-Македонија. Со работно искуство од повеќе години во областа внатрешно дизајнирање. Завршено средно образование Архитектура и високо образование - дизајн и ентериер.Со повеќе од 2 години работно искуство во 3D CIMEMA4D и изработка на техничка реализација и основи во 2D AutoCAD како и големо работно искуство во производен погон за мебел.")
        $("#intro").text("За мене");
        $("#work").text("Моја работа");
        $("#contact").text("Контакт");
        inner_h1.text("Сашка Трајковски");
        inner_p.html("Добредојдовте во моето портфолио <br> за внатрешен дизајн")
        $("#intro .major").text("За мене");
        $("#work .major").text("Моја работа");
        $("#contact .major").text("Контакт");
        $("#work p").html("Имам повеќе страни каде што ја покажувам и растам мојата работа како што се <a target='_blank' href='https://www.behance.net/sashkatrajkov'> Behance</a>, <a target='_blank' href='https://www.instagram.com/onlineinteriordesign__/?hl=en'>Instagram</a> и <a target='_blank' href='https://www.facebook.com/saska.madnes'> Facebook</a><br> Исто може да ја видете мојата работа накратко овде:")
        $("#email").text("ЕЛЕКТРОНСКА ПОШТА:");
        $("#phone").text("ТЕЛЕФОН:");
        email.text("Електронска пошта:");
        phone.text("Телефонски број:");
    }
}