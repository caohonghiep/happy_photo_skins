function convertImgToBase64(url, callback,aa, outputFormat) {
    //src: http://jsfiddle.net/handtrix/YvQ5y/
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    var img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
        var fullWidth = $('.full_screen').width();
        var fullHeight = $('.full_screen').height() - 10;
        var imageHeight = img.height;
        var imageWidth = img.width;

        canvas.height = fullHeight;
        canvas.width = fullWidth;

        var t = fullHeight / imageHeight;
        if (t < fullWidth / imageWidth) {
            t = fullWidth / imageWidth;
        }
        var heightView = imageHeight * t;
        var widthView = imageWidth * t;
        ctx.drawImage(img, -(widthView - fullWidth) / 2, -(heightView - fullHeight) / 2, widthView, heightView);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL,aa);
        // Clean up
        canvas = null;
    };
    img.src = url;
}

function rerenderImage(){
     var imgs = $('.border_box > div > ul li> a > img');
                var le = imgs.length;
                for(var ii=0;ii< le; ii++){
                    convertImgToBase64(
                            imgs[ii].alt, 
                            function(base64Img, aa) {
                                var image = new Image();
                                image.src = base64Img;
                                $(aa).parent().append(image);
                                $(aa).remove();
                            },
                            imgs[ii]
                    );
            }
}