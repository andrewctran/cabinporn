var offset = Math.floor(Math.random() * 1200);

$.ajax({
    url: "http://api.tumblr.com/v2/blog/cabinporn.com/posts?api_key=1vwk9jz7mQVCYWsZYEhXr1kE2oTN3ClMdNcrobtAPqVAGfk2IH&limit=50&offset="+offset,
    dataType: 'jsonp',
    success: function(results){
    	console.log(url)
        console.log(results); 
        var rand = Math.floor(Math.random() * 50);
        while (results.response.posts[rand].photos[0].original_size.width < 1280) {
        	rand = Math.floor(Math.random() * 50);
        }
        var url = results.response.posts[rand].photos[0].original_size.url;
        $('body').css('background-image', 'url('+url+')');
        console.log(url);
    }
});