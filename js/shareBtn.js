{
    document.querySelector('#main').addEventListener('click', eve => {
		if (eve.target.classList.contains('shareBtn')) {
			return eve.target.parentElement.lastElementChild.classList.toggle('shareIconsWrapperVisible');
		} else if(eve.target.classList.contains('shareIconsBtn')) {
			return eve.target.parentElement.classList.toggle('shareIconsWrapperVisible');
		};
    });
}


