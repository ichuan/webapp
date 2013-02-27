(function() {
    var my_url = document.getElementById('_id-js-loader_').src,
        dirname = my_url.substr(0, my_url.lastIndexOf('/') + 1);
    document.write('<script src="' + dirname + '../vendor/require/require.js"></script>');
})();
