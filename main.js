
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.site--container').onclick = function() {
    document.querySelector('.chart--container').style.display = 'flex';
    document.querySelector('#button--bp').style.display = 'flex';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#button--bp').onclick = function() {
    document.querySelector('.chart--container').style.display = 'none';
    document.querySelector('#button--bp').style.color = 'none';
  }
});

document.getElementById("sites").playbackRate = .5;


