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
        var post_url = results.response.posts[rand].post_url;
        var caption = results.response.posts[rand].caption;
        document.getElementById("cover-image").style.backgroundImage = 'url(' +url+ ')';
        document.getElementById("link-cover").href= post_url;
        document.getElementById("title").href= post_url;
        console.log(url);

        var temp = document.createElement("div");
        temp.innerHTML = caption;

        // TODO: check if caption is still too long
        document.getElementById("title").innerHTML = stripHTML(caption.substring(0, caption.indexOf('.')));

        // var link = document.createElement('a');
        // link.href = post_url;
        // link.innerHTML = caption;
        // document.querySelectorAll('span.name')[0].appendChild(link).appendChild(link.previousSibling);

    }
});

function stripHTML(html) {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.innerText;
}