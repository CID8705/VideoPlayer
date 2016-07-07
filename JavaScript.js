var source="";
function getSource(url) {
    var request = null;
    if ("XMLHttpRequest" in window) {
        request = new XMLHttpRequest();
    }
    else if ("ActiveXObject" in window) {
        try {
            request = new ActiveXobject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {}
        }
    }
    request.open("GET", url, false);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            source = request.responseText;
        }
    };
    request.send(null);
	return;
}
function getUrl() {
	var str = "";
	var url1, url2;
	var i;
	var link;
	var video;
	getSource(Form.textbox.value);
	url1 = source.replace(/\"/g, " ").match(/http:\/\/www\.anitube\.se\/player\/config\.php\?key=\S+/g);
	for (i = 0; i < url1.length; ++i) {
		getSource(url1[i]);
		url2 = source.replace(/\"/g, " ").match(/http:\/\/vid\S+/g);
		str = url2[url2.length - 1];
	}
	link = document.getElementById('link');
	link.href = str;
	link.innerText = str;
	video = document.getElementById('video');
	video.src = str;
	video.load();
    return;
}
function videoPlay() {
	var video;
	video = document.getElementById('video');
	if (video.paused == true) {
		video.play();
	}
	else {
		video.pause();
	}
	return;
}