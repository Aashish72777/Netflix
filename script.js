console.log("Welcome");
var first = document.querySelector('#first');
var second = document.querySelector('#second');
var third = document.querySelector('#third');
var fourth = document.querySelector('#fourth');
var fifth = document.querySelector('#fifth');
var six = document.querySelector('#six');
var detail1 = document.querySelector('.detail1');
var detail2 = document.querySelector('.detail2');
var detail3 = document.querySelector('.detail3');
var detail4 = document.querySelector('.detail4');
var detail5 = document.querySelector('.detail5');
var detail6 = document.querySelector('.detail6');
var second_last = document.querySelector('.second_last');
var check = 0;
first.addEventListener('click', function () {
    // detail2.style.display = "none";
    // detail3.style.display = "none";
    // detail4.style.display = "none";
    // detail5.style.display = "none";
    // detail6.style.display = "none";
    if (check == 0) {
        detail1.style.display = "block";
        detail2.style.display = "none";
        detail3.style.display = "none";
        detail4.style.display = "none";
        detail5.style.display = "none";
        detail6.style.display = "none";
        second_last.style.height ="140vh";
        check = 1;

    }
    else {
        detail1.style.display = "none";
        second_last.style.height ="120vh";
        check = 0;

    }

});
second.addEventListener('click', function () {
    if (check == 0) {
        detail1.style.display = "none";
        detail2.style.display = "block";
        detail3.style.display = "none";
        detail4.style.display = "none";
        detail5.style.display = "none";
        detail6.style.display = "none";
        second_last.style.height ="130vh";
        check = 1;
    }
    else {
        detail2.style.display = "none";
        second_last.style.height ="120vh";
        check = 0;

    }

});
third.addEventListener('click', function () {
    if (check == 0) {
        detail1.style.display = "none";
        detail2.style.display = "none";
        detail3.style.display = "block";
        detail4.style.display = "none";
        detail5.style.display = "none";
        detail6.style.display = "none";
        second_last.style.height ="150vh";
        check = 1;
    }
    else {
        detail3.style.display = "none";
        second_last.style.height ="120vh";
        check = 0;

    }

});
fourth.addEventListener('click', function () {
    if (check == 0) {
        detail1.style.display = "none";
        detail2.style.display = "none";
        detail3.style.display = "none";
        detail4.style.display = "block";
        detail5.style.display = "none";
        detail6.style.display = "none";
        second_last.style.height ="130vh";
        check = 1;
    }
    else {
        detail4.style.display = "none";
        second_last.style.height ="120vh";
        check = 0;

    }

});
fifth.addEventListener('click', function () {
    if (check == 0) {
        detail1.style.display = "none";
        detail2.style.display = "none";
        detail3.style.display = "none";
        detail4.style.display = "none";
        detail5.style.display = "block";
        detail6.style.display = "none";
        second_last.style.height ="130vh";
        check = 1;
    }
    else {
        detail5.style.display = "none";
        second_last.style.height ="120vh";
        check = 0;

    }

});
six.addEventListener('click', function () {
    if (check == 0) {
        detail1.style.display = "none";
        detail2.style.display = "none";
        detail3.style.display = "none";
        detail4.style.display = "none";
        detail5.style.display = "none";
        detail6.style.display = "block";
        second_last.style.height ="140vh";
        check = 1;
    }
    else {
        detail6.style.display = "none";
        second_last.style.height ="120vh";
        check = 0;

    }

});

