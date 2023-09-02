const div = document.querySelector('div');

div.addEventListener('mouseover', function(event){
  const res = document.querySelector('.res');
  res.innerHTML = event.target.textContent;
})
