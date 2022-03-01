/*! Author: JW. 2022-02-20 */

//Dark Mode
document.querySelector('.btn_theme').addEventListener('click', function(){
	document.querySelector('html').dataset.theme == 'dark' ? delete document.querySelector('html').dataset.theme : document.querySelector('html').dataset.theme = 'dark';
});