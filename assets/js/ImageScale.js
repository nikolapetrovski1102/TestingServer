var first = $("#first");
var first_image = $("#first img");
var second = $("#second");
var third = $("#third")
var fourth = $("#fourth")
var fifth = $("#fifth")

var image = $("#work img");

var Close_button = $("#close").hide();
var Close_button1 = $("#close1").hide();
var Close_button2 = $("#close2").hide();
var Close_button3 = $("#close3").hide();
var Close_button4 = $("#close4").hide();

first.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button.fadeIn(2000);
            if (document.getElementById("first").style.transform === "scale(1.2)"){
                Close_button.click( function () {
                    document.getElementById("first").style.transform = "scale(1)";
                    Close_button.hide();
                });
            }
        });
second.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button1.fadeIn(2000);
            if (document.getElementById("second").style.transform === "scale(1.2)"){
                Close_button1.click( function () {
                    document.getElementById("second").style.transform = "scale(1)";
                    Close_button1.hide();
                    });
            }
        });
third.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button2.fadeIn(2000);
            if (document.getElementById("third").style.transform === "scale(1.2)"){
                Close_button2.click( function () {
                    document.getElementById("third").style.transform = "scale(1)";
                    Close_button2.hide();
                    });
            }
        });
fourth.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button3.fadeIn(2000);
            if (document.getElementById("fourth").style.transform === "scale(1.2)"){
                Close_button3.click( function () {
                    document.getElementById("fourth").style.transform = "scale(1)";
                    Close_button3.hide();
                    });
            }
        });
fifth.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button4.fadeIn(2000);
            if (document.getElementById("fifth").style.transform === "scale(1.2)"){
                Close_button4.click( function () {
                    document.getElementById("fifth").style.transform = "scale(1)";
                    Close_button4.hide();
                    });
            }
        });