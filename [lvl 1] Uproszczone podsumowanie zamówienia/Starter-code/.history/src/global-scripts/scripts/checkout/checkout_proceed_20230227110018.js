function loading() {
    alert('loading');
    var btn = document.querySelector('.btn');
    var loader = document.querySelector('.loader');
    btn.classList.add('loading');
    loader.style.display = 'inline-block';
    setTimeout(function(){
      btn.classList.remove('loading');
      loader.style.display = 'none';
    }, 2000); // 2000ms to simulate a 2-second loading time
  }
  