function vimbed() {
		var vidid = document.getElementById('video_id').value;
 
		var html = '&lt;iframe src="https://player.vimeo.com/video/' + vidid + '?color=104b7d&title=0&byline=0&portrait=0&transparent=0" width="750" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen&gt;&lt;/iframe&gt;';
 
    document.getElementById('result').innerHTML = html;

	}
 
document.getElementById('getcode').addEventListener('click', vimbed);

function vimbed2() {
    var vidid, html;

    // Get the value of the input field with id="vidid"
    vidid = document.getElementById("vidid").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(vidid) || x < 100000000 || x > 1000000000) {
        html = "Please enter a 9-digit number.";
    } else {
        html = '&lt;iframe src="https://player.vimeo.com/video/' + vidid + '?color=104b7d&title=0&byline=0&portrait=0&transparent=0" width="750" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen&gt;&lt;/iframe&gt;';
    }
    document.getElementById("result").innerHTML = html;
}