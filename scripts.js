const spans = document.querySelectorAll('h1 span');
spans.forEach(span => span.addEventListener('mouseover', function (e) {
  span.classList.add('animate__animated', 'animate__rubberBand');
}));
spans.forEach(span => span.addEventListener('mouseout', function (e) {
  span.classList.remove('animate__animated', 'animate__rubberBand');
}));
