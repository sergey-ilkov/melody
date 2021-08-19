$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var modal = $('.modal');
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data');
        $('.counter').text(currentFloor);
    });
    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGroupping: false,
            });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGroupping: false,
            });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    modal.on('click', function (e) {
        if (
            e.target.className == 'modal__apartment-img' ||
            e.target.className == 'modal modal-active'
        ) {
            modal.removeClass('modal-active');
        }
    });
    $('.button-primery').on('click', function () {
        modal.addClass('modal-active');
        $('.modal__floor-title').text('Этаж ' + currentFloor);
    });
    floorPath.on('click', function () {
        modal.addClass('modal-active');
        $('.modal__floor-title').text('Этаж ' + currentFloor);
    });
});
