var hList = '',
	vList = '';

$.each(data.hot, function(i, o) {
	if (o.isPlay) {
		hList += '<li>' +
			'    <a href="javascript:;">' +
			'        <img class="lazy" data-original="' + o.cover + '">' +
			'    </a>' +
			'</li>';
	} else {
		hList += '<li>' +
			'    <a href="javascript:;">' +
			'        <img class="lazy" data-original="' + o.cover + '">' +
			'        <span class="state">直播中</span>' +
			'        <span class="city"></span>' +
			'        <div class="des">' +
			'            <p class="name">' + o.name + '</p>' +
			'            <p><span>' + o.view + '</span>人在看</p>' +
			'        </div>' +
			'    </a>' +
			'</li>';
	}
})
$('.hot ul').html(hList);
$.each(data.video, function(i, o) {
	vList += '<li>' +
		'    <a href="javascript:;">' +
		'        <span class="pic">' +
		'            <img class="lazy" data-original="' + o.cover + '">' +
		'            <span class="state">空闲</span>' +
		'        <span class="city"></span>' +
		'            <p class="name">' + o.name + '</p>' +
		'        </span>' +
		'        <p class="des">视频看她</p>' +
		'    </a>' +
		'</li>';
})
$('.video ul').html(vList);
$("img.lazy").lazyload({
	placeholder: 'https://cdn.jsdelivr.net/gh/DiabloVideo/Resources/place.jpg',
	effect: "fadeIn",
	threshold: 500
});
$(document).on('click', '.js_pop', function() {
	$('.cover,.layer').show();
}).on('click', '.cover', function() {
	$('.cover,.layer').hide();
})