
// Load functions
scrollListener();

function scrollListener() {
	el = document.getElementById('scroll-down-arrow');
	el.addEventListener('click', () => {
		console.log(document.getElementById('scroll-target'));
		document.getElementById('scroll-target').scrollIntoView({behavior: 'smooth'});
	});
};
