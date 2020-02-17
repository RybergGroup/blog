var make_links = function () {
    console.log(location.pathname);
    //var posts = require('../database.json');
    document.getElementById("links").innerHTML = '<a href="../index.html">Home</a>';
    //console.log(JSON.stringify(posts));
    //console.log(posts.entries.length);
    for (var i=0; i<posts.entries.length; ++i) {
	console.log(posts.entries[i].address);
        if (location.pathname === posts.entries[i].address) {
            if (i > 0 && posts.entries[i-1].address) document.getElementById("links").innerHTML += ' | <a href="' + posts.entries[i-1].address + '">prev</a>';
            if (i+1 < posts.length && posts.entries[i+1].address) document.getElementById("links").innerHTML += ' | <a href="' + posts.entries[i+1].address + '">next</a>';
            break;
        }
    }
    document.getElementById("links").innerHTML += '<hr>';
}
document.addEventListener("load",make_links());

