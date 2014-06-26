/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var title = parent.imagesData.title || "Trần Quang Cuộc & Cao Kim Hồng";
var congratulation = parent.imagesData.congratulation || "Trăm Năm Hạnh Phúc";
var imagesJson = parent.imagesData.imagesList || [{
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh3.googleusercontent.com/-1e-ZjPpZL8Y/UyPm6aNm8iI/AAAAAAAADrg/B4pcypP16EU/s288/1.JPG",
        "imageURL": "https://lh3.googleusercontent.com/-1e-ZjPpZL8Y/UyPm6aNm8iI/AAAAAAAADrg/B4pcypP16EU/s4000/1.JPG"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh4.googleusercontent.com/-0HJJtS8j7w4/UyPnAalz4yI/AAAAAAAADrg/5-r6r7QG3jU/s288/2.JPG",
        "imageURL": "https://lh4.googleusercontent.com/-0HJJtS8j7w4/UyPnAalz4yI/AAAAAAAADrg/5-r6r7QG3jU/s4000/2.JPG"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh6.googleusercontent.com/-Kfqln-mutOo/UyPn4Ux5GtI/AAAAAAAADrg/k70ptP3LReI/s288/3.JPG",
        "imageURL": "https://lh6.googleusercontent.com/-Kfqln-mutOo/UyPn4Ux5GtI/AAAAAAAADrg/k70ptP3LReI/s4000/3.JPG"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh4.googleusercontent.com/-2uQ6cM1nuEI/UyPoQxvJupI/AAAAAAAADrg/t6hfqUuuMMk/s288/4.JPG",
        "imageURL": "https://lh4.googleusercontent.com/-2uQ6cM1nuEI/UyPoQxvJupI/AAAAAAAADrg/t6hfqUuuMMk/s4000/4.JPG"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh6.googleusercontent.com/-wbDHjH6BTQg/UyPnzfLVlzI/AAAAAAAADrg/GMglxtbN5xc/s288/5.JPG",
        "imageURL": "https://lh6.googleusercontent.com/-wbDHjH6BTQg/UyPnzfLVlzI/AAAAAAAADrg/GMglxtbN5xc/s4000/5.JPG"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh5.googleusercontent.com/-ylwrHBFOQac/UyPooJ3NNSI/AAAAAAAADrg/a9LOHO2CxI4/s288/6.jpg",
        "imageURL": "https://lh5.googleusercontent.com/-ylwrHBFOQac/UyPooJ3NNSI/AAAAAAAADrg/a9LOHO2CxI4/s4000/6.jpg"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh4.googleusercontent.com/-XUkBq8hxnI0/UyPpl3OZ3ZI/AAAAAAAADrg/kM4RhcG0Iyg/s288/7.JPG",
        "imageURL": "https://lh4.googleusercontent.com/-XUkBq8hxnI0/UyPpl3OZ3ZI/AAAAAAAADrg/kM4RhcG0Iyg/s4000/7.JPG"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh5.googleusercontent.com/-yuptxUruUhI/UyPpvT4ccFI/AAAAAAAADrg/SxO0QGLNRcM/s288/8.JPG",
        "imageURL": "https://lh5.googleusercontent.com/-yuptxUruUhI/UyPpvT4ccFI/AAAAAAAADrg/SxO0QGLNRcM/s4000/8.JPG"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh6.googleusercontent.com/-Y2TEpHOsf6g/UyPpy-3HT9I/AAAAAAAADrg/3G6KP0H2aMM/s288/9.JPG",
        "imageURL": "https://lh6.googleusercontent.com/-Y2TEpHOsf6g/UyPpy-3HT9I/AAAAAAAADrg/3G6KP0H2aMM/s4000/9.JPG"
    },
    {
        "title": "",
        "description": "",
        "imageThumbURL": "https://lh3.googleusercontent.com/-mGAdXJfT7EI/UyPmu4igGRI/AAAAAAAADrg/8ndhMfGJ-S8/s288/10.JPG",
        "imageURL": "https://lh3.googleusercontent.com/-mGAdXJfT7EI/UyPmu4igGRI/AAAAAAAADrg/8ndhMfGJ-S8/s4000/10.JPG"
    }];


    function createView(){
        var im;
        var thumbs = document.getElementsByClassName('thumbs')[0];
        for(var i =0; i < imagesJson.length; i++){
            im = new Image();
            im.src = imagesJson[i].imageThumbURL;
            im.alt =  imagesJson[i].imageURL;
            thumbs.appendChild(im);
        }
    }

//rerender {
$(document).ready(function() {
    
    var indexImage = 0;
    var timeDeplay = 5000;
    var timeEffect = 2000;
    var slider;
    
    $('.wedding_name h1').html(title);
    $('.wedding_name h6').html(congratulation);
    
    startSlider();
    
    setTimeout(function (){$('#toggle').click();},3000);
    setTimeout(function (){$('.wedding_name').css('top','30px');},2000);
    function stopSlider() {
        clearTimeout(slider);
    }

    function startSlider() {
        loadImage(indexImage);
        indexImage++;
        slider = setTimeout(function() {
            startSlider();
        }, timeDeplay);
    }


    function showLoader() {
        $('.loader_container').css('display', 'block');
    }

    function hiddenLoader() {
        $('.loader_container').css('display', 'none');
    }

    function loadImage(index) {
        showLoader();
        var image = new Image();
        var img = document.createElement('img');
        $(img).css('transition', 'opacity ' + timeEffect + 'ms linear');
        image.onload = function() {
            img.src = image.src;
            var backgroundContainer = $('.background_container');
            $(backgroundContainer).prepend(img);
            hiddenLoader();
            deletePreviewImage();
        };
        var images = $('.thumbs_wrapper .thumbs > img');
        $(images).css('opacity','0.5');
        $(images[(index%images.length)]).css('opacity','1');        
        image.src = (images[(index%images.length)]).alt;
    }

    function deletePreviewImage() {
        var backgroundContainer = $('.background_container');
        var previewImage = ($(backgroundContainer).find('img'))[1];
        $(previewImage).css('opacity', '0');
        setTimeout(function() {
            $(previewImage).remove();
        }, timeEffect);
    }

    $('#toggle').click(function() {
        if ($(this).find('> span[class=arrow_up]').length > 0) {
            $(this).find('> span[class=arrow_up]').attr('class', 'arrow_down');
        } else {
            $(this).find('> span[class=arrow_down]').attr('class', 'arrow_up');
        }
        if ($(this).next(".thumbs_wrapper").css("opacity") === '0') {
            $(this).next(".thumbs_wrapper").css({
                "opacity": 1,
                "width": "none",
                "height": "none",
                "padding": "none"
            });
        } else {
            $(this).next(".thumbs_wrapper").css({
                "opacity": 0,
                "width": "0",
                "height": "0",
                "padding": "0"
            });
        }
    });


    function setWidthOfThumbs(){
        var wrapper = $('.thumbs_wrapper');
        var wrapperWidth = $(wrapper).width();

        var thumbs = $(wrapper).find('.thumbs');

        var images = $(thumbs).find('>img');
        var numberImages = images.length;
        var imageWidth = $(images[0]).width();
        var imageMarginRight = parseInt(($(images[0]).css('margin-right')).substr(0, ($(images[0]).css('margin-right')).length - 2));
        $(thumbs).css('width',(imageWidth+imageMarginRight)*numberImages+'px');
    }
    
    setWidthOfThumbs();
    
    $('.thumbs_wrapper .thumbs > img').click(function(event){
        stopSlider();
        indexImage = $('.thumbs_wrapper .thumbs > img').index(event.target);
        startSlider();
    });
    
    $('.expand-next').click(function() {
        var wrapper = $('.thumbs_wrapper');
        var wrapperWidth = $(wrapper).width();

        var thumbs = $(wrapper).find('.thumbs');
        var thumbsWidth = $(thumbs).width();
        var thumbsLeftMargin = parseInt(($(thumbs[0]).css('margin-left')).
                substr(0, ($(thumbs[0]).css('margin-left')).length - 2));

        var images = $(thumbs).find('>img');

        var numberImages = images.length;
        var imageWidth = $(images[0]).width();
        var imageMarginRight = parseInt(($(images[0]).css('margin-right')).substr(0, ($(images[0]).css('margin-right')).length - 2));

        var numberImagesOnASlide = Math.floor(wrapperWidth / (imageWidth + imageMarginRight));
        var numberImagesOnASlideWidth = numberImagesOnASlide * (imageWidth + imageMarginRight);

        if (-(thumbsLeftMargin - 2 * numberImagesOnASlideWidth) < thumbsWidth) {
            $(thumbs).css('margin-left', (thumbsLeftMargin - numberImagesOnASlideWidth) + 'px');
        } else {
            $(thumbs).css('margin-left', (-thumbsWidth + wrapperWidth + imageMarginRight) + 'px');
        }

    });

    $('.expand-prev').click(function() {
        var wrapper = $('.thumbs_wrapper');
        var wrapperWidth = $(wrapper).width();

        var thumbs = $(wrapper).find('.thumbs');
        var thumbsWidth = $(thumbs).width();
        var thumbsLeftMargin = parseInt(($(thumbs[0]).css('margin-left')).
                substr(0, ($(thumbs[0]).css('margin-left')).length - 2));

        var images = $(thumbs).find('>img');

        var numberImages = images.length;
        var imageWidth = $(images[0]).width();
        var imageMarginRight = parseInt(($(images[0]).css('margin-right')).substr(0, ($(images[0]).css('margin-right')).length - 2));

        var numberImagesOnASlide = Math.floor(wrapperWidth / (imageWidth + imageMarginRight));
        var numberImagesOnASlideWidth = numberImagesOnASlide * (imageWidth + imageMarginRight);

        if (thumbsLeftMargin + numberImagesOnASlideWidth < 0) {
            $(thumbs).css('margin-left', (thumbsLeftMargin + numberImagesOnASlideWidth) + 'px');
        } else {
            $(thumbs).css('margin-left', '0px');
        }

    });
});


//rerender }