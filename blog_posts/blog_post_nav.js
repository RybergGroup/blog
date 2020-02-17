var make_links = function () {
    console.log(location.pathname);
    var links = '';
    var home_link = '<div class="nav-home"><a href="../index.html">Home</a></div>';
    for (var i=0; i<posts.entries.length; ++i) {
	console.log(posts.entries[i].address);
        if (location.pathname === posts.entries[i].address) {
            if (i > 0 && posts.entries[i-1].address) links = '<a href="' + posts.entries[i-1].address + '">prev</a>' + home_link;
            if (i+1 < posts.entries.length && posts.entries[i+1].address) links += ' <div class="nav-right"><a href="' + posts.entries[i+1].address + '">next</a></div>';
            break;
        }
    }
    if (!links) links = home_link;
    links += '<br><hr>';
    document.getElementById("links").innerHTML = links;
}
document.addEventListener("load",make_links());

