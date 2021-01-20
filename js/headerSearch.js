{
    document.querySelector('.headerSearchBtn').addEventListener('click', el => document.querySelector('.searchInputWrapper').classList.toggle('searchInputWrapperVisible'));

    document.querySelector('.headerSearchInput').addEventListener('keyup', ev => {
      if((ev.isComposing || ev.keyCode === 13 || ev.keyCode === 27)) {
        document.querySelector('.searchInputWrapper').classList.toggle('searchInputWrapperVisible');
      }
    });
}