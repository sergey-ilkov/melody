$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var buttonPrimery = $('.button-primery');
    var flats = $('.flats path');
    var flatList = $('.flat-list .flat-link');
    var modalCounter = $('.modal-counter');

    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data');
        $('.counter').text(currentFloor);
    });
    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    buttonPrimery.on('click', toggleModal);

    flats.on('mouseover', function () {
        currentFlats = $(this).attr('data-flat');
        flats.removeClass('current-flat');
        flatList.removeClass('flat-link-hover');
        $(`[data-flat-link=${currentFlats}]`).toggleClass('flat-link-hover');
    });
    flatList.on('mouseover', function () {
        currentFlatList = $(this).attr('data-flat-link');
        flatList.removeClass('flat-link-hover');
        flats.removeClass('current-flat');
        $(`[data-flat=${currentFlatList}]`).toggleClass('current-flat');
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
    function toggleModal() {
        modal.toggleClass('is-open');
        currentFloor = Number(currentFloor);
        currentFloor = String(currentFloor);
        modalCounter.text(currentFloor);
        flats.removeClass('current-flat');
        flatList.removeClass('flat-link-hover');
        $.each(flats, function (el) {
            newCurrentFlat = currentFloor + String(el);
            $(this).attr('data-flat', newCurrentFlat);
        });
        $.each(flatList, function (el) {
            newCurrentFlat = currentFloor + String(el);
            $(this).attr('data-flat-link', newCurrentFlat);
            $(this).children().text(newCurrentFlat);
        });
    }
});
