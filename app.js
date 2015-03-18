var offset = Math.floor(Math.random() * 1200);

$.ajax({
    url: "http://api.tumblr.com/v2/blog/cabinporn.com/posts?api_key=1vwk9jz7mQVCYWsZYEhXr1kE2oTN3ClMdNcrobtAPqVAGfk2IH&limit=50&offset="+offset,
    dataType: 'jsonp',
    success: function(results){
    	// console.log(url)
     //    console.log(results); 
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
        // console.log(url);
        // console.log(caption);

        var temp = document.createElement("div");
        temp.innerHTML = caption;
        document.getElementById("title").innerHTML = stripHTML(caption.substring(0, caption.indexOf('.')));

        var contributor = getContributor(temp.innerText);
        document.getElementById("contributor").innerHTML = stripHTML(contributor);
    }
});

function stripHTML(html) {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.innerText;
}

function getContributor(caption) {
    var index = caption.toLowerCase().indexOf("contributed by");
    if (index != -1) return caption.substring(index + "contributed by".length + 1).replace(/^[.\s]+|[.\s]+$/g, "");
    index = caption.toLowerCase().indexOf("submitted by");
    if (index != -1) return caption.substring(index + "submitted by".length + 1).replace(/^[.\s]+|[.\s]+$/g, "");
    index = caption.toLowerCase().indexOf("submission by");
    if (index != -1) return caption.substring(index + "submission by".length + 1).replace(/^[.\s]+|[.\s]+$/g, "");
    index = caption.toLowerCase().indexOf("contribution by");
    if (index != -1) return caption.substring(index + + "contribution by".length + 1).replace(/^[.\s]+|[.\s]+$/g, "");
    return "Cabin Porn"
}