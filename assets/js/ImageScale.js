var first = $("#first");
var first_image = $("#first img");
var second = $("#second");

var image = $("#work img");

var Close_button = $("#close").hide();
var Close_button1 = $("#close1").hide();

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
                    first.click ( function () {
                    document.getElementById("second").style.transform = "scale(1)";
                    Close_button1.hide();
                    });
                });
            }
        });