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
    $("#work #second, #third, #fourth, #fifth, h2, p").animate({blurRadius: 10}, {
        duration: 500,
        easing: 'swing',
        step: function() {
            console.log(this.blurRadius);
            $('#work #second, #third, #fourth, #fifth, h2, p').css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
    Close_button.fadeIn(2000);
            if (document.getElementById("first").style.transform === "scale(1.2)"){
                Close_button.click( function () {
                    document.getElementById("first").style.transform = "scale(1)";
                    Close_button.hide();
                    $("#work #second, #third, #fourth, #fifth, h2, p").animate({blurRadius: 0}, {
                        duration: 500,
                        easing: 'swing',
                        step: function() {
                            console.log(this.blurRadius);
                            $('#work #second, #third, #fourth, #fifth, h2, p').css({
                                "-webkit-filter": "blur("+this.blurRadius+"px)",
                                "filter": "blur("+this.blurRadius+"px)"
                            });
                        }
                    });
                });
            }
        });
second.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button1.fadeIn(2000);
    $("#work #first, #third, #fourth, #fifth, h2, p").animate({blurRadius: 10}, {
        duration: 500,
        easing: 'swing',
        step: function() {
            console.log(this.blurRadius);
            $('#work #first, #third, #fourth, #fifth, h2, p').css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
        if (document.getElementById("second").style.transform === "scale(1.2)"){
            Close_button1.click( function () {
            document.getElementById("second").style.transform = "scale(1)";
            Close_button1.hide();
            $("#work #first, #third, #fourth, #fifth, h2, p").animate({blurRadius: 0}, {
                duration: 500,
                easing: 'swing',
                step: function() {
                    console.log(this.blurRadius);
                    $('#work #first, #third, #fourth, #fifth, h2, p').css({
                        "-webkit-filter": "blur("+this.blurRadius+"px)",
                        "filter": "blur("+this.blurRadius+"px)"
                    });
                }
            });
                });
            }
        });
third.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button2.fadeIn(2000);
    $("#work #first, #second, #fourth, #fifth, h2, p").animate({blurRadius: 10}, {
        duration: 500,
        easing: 'swing',
        step: function() {
            console.log(this.blurRadius);
            $('#work #first, #second, #fourth, #fifth, h2, p').css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
            if (document.getElementById("third").style.transform === "scale(1.2)"){
                Close_button2.click( function () {
                    document.getElementById("third").style.transform = "scale(1)";
                    Close_button2.hide();
                    $("#work #first, #second, #fourth, #fifth, h2, p").animate({blurRadius: 0}, {
                        duration: 500,
                        easing: 'swing',
                        step: function() {
                            console.log(this.blurRadius);
                            $('#work #first, #second, #fourth, #fifth, h2, p').css({
                                "-webkit-filter": "blur("+this.blurRadius+"px)",
                                "filter": "blur("+this.blurRadius+"px)"
                            });
                        }
                    });
                    });
            }
        });
fourth.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button3.fadeIn(2000);
    $("#work #first, #third, #second, #fifth, h2, p").animate({blurRadius: 10}, {
        duration: 500,
        easing: 'swing',
        step: function() {
            console.log(this.blurRadius);
            $('#work #first, #third, #second, #fifth, h2, p').css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
            if (document.getElementById("fourth").style.transform === "scale(1.2)"){
                Close_button3.click( function () {
                    document.getElementById("fourth").style.transform = "scale(1)";
                    Close_button3.hide();
                    $("#work #first, #third, #second, #fifth, h2, p").animate({blurRadius: 0}, {
                        duration: 500,
                        easing: 'swing',
                        step: function() {
                            console.log(this.blurRadius);
                            $('#work #first, #third, #second, #fifth, h2, p').css({
                                "-webkit-filter": "blur("+this.blurRadius+"px)",
                                "filter": "blur("+this.blurRadius+"px)"
                            });
                        }
                    });
                    });
            }
        });
fifth.click( function () {
    this.style.transform = "scale(1.2)";
    Close_button4.fadeIn(2000);
    $("#work #first, #third, #fourth, #second, h2, p").animate({blurRadius: 10}, {
        duration: 500,
        easing: 'swing',
        step: function() {
            console.log(this.blurRadius);
            $('#work #first, #third, #fourth, #second, h2, p').css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
            if (document.getElementById("fifth").style.transform === "scale(1.2)"){
                Close_button4.click( function () {
                    document.getElementById("fifth").style.transform = "scale(1)";
                    Close_button4.hide();
                    $("#work #first, #third, #fourth, #second, h2, p").animate({blurRadius: 0}, {
                        duration: 500,
                        easing: 'swing',
                        step: function() {
                            console.log(this.blurRadius);
                            $('#work #first, #third, #fourth, #second, h2, p').css({
                                "-webkit-filter": "blur("+this.blurRadius+"px)",
                                "filter": "blur("+this.blurRadius+"px)"
                            });
                        }
                    });
                    });
            }
        });

        document.getElementById("work_header").style.filter