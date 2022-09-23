const box = document.getElementById('back');
const fechar = document.getElementById('fechar')
const btn = document.getElementById('btn');

/*const img = document.getElementsByClass('lateral');
const imgMaior = document.getElementById('img');*/


btn.addEventListener('click', function handleClick() {
  if (box.style.display === 'none') {
    box.style.display = 'block';
    btn.textContent = 'CONTRATAR';
  } else {
    box.style.display = 'none';

    
  }
});


fechar.addEventListener('click', function handleClick() {
  if (box.style.display === 'none') {
    box.style.display = 'block';

    btn.textContent = 'Hide div';
  } else {
    box.style.display = 'none';

    btn.textContent = 'CONTRATAR';
  }
});

/*img.addEventListener('click', function handleClick() {
  if  (imgMaior.style.display === 'none') {
    var src =  img.getAttribute('src');
    imgMaior.style.display = 'block';

  } else {
    imgMaior.style.display = 'none';
  }
});
*/

