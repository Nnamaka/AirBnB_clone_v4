$('document').ready(()=>{
	const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
	$.get(url, (res)=>{
	if(res.status === 'OK'){
		$('DIV#api_status').addClass('available');
	} else {
		$('DIV#api_status').removeClass('available');
	}
	});

	let amenities = {};
	$('INPUT[type="checkbox"]').change(()=>{
		if ($(this).is(':checked')) {
			amenities[$(this).attr('data-id')] = $(this).attr('data-name');
		} else {
			delete amenities[$(this).attr('data-id')];
		}

		if (Object.values(amenities).length === 0) {
			$('.amenities h4').html('&nbsp;');
		} else {
			$('.amenities h4').text(Object.values(amenities).join(', '));
		}
	});
});

