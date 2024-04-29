document.querySelector('a').innerHTML = `<span>${document.querySelector('a').innerHTML.split('').join('</span><span>')}</span>`;

[...document.querySelectorAll('span')].forEach($e => {
  $e.innerHTML = $e.innerHTML + `<i>${$e.innerHTML}</i>`.repeat(7);
});