function createArticle() {
	
	
	let titleInput = document.getElementById('createTitle');
	let contentInput = document.getElementById('createContent');
	let sectionArticle = document.getElementById('articles');

	if(!titleInput.value || !contentInput.value) {
		return;
	}
	
	let h3Tag = document.createElement('h3');
	let articleP = document.createElement('p');
	let emptyArticle = document.createElement('article');
	console.log(titleInput.value, contentInput.value);

	h3Tag.innerText = titleInput.value;
	articleP.innerText = contentInput.value;
	
	emptyArticle.appendChild(h3Tag);
	emptyArticle.appendChild(articleP);
	sectionArticle.appendChild(emptyArticle);

	titleInput.value = '';
	contentInput.value = '';


}