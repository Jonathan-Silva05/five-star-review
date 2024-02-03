
	document.addEventListener('DOMContentLoaded', (event) => {
		const stars = document.querySelectorAll('.star-rating input');
		const p = document.querySelector('#p');

		stars.forEach(star => {
			star.addEventListener('change', (e) => {
				localStorage.setItem('rating', e.target.value);
				if (p !== null) {
					p.innerHTML = parseFloat(e.target.value).toFixed(1);
				}
			});
		});

		// Check for saved rating
		const savedRating = localStorage.getItem('rating');
		if (savedRating) {
			const starToCheck = document.querySelector(`.star-rating input[value="${savedRating}"]`);
			if (starToCheck) {
				starToCheck.checked = true;
				if (p !== null) {
					p.innerHTML = parseFloat(savedRating).toFixed(1);
				}
			}
		}
	});