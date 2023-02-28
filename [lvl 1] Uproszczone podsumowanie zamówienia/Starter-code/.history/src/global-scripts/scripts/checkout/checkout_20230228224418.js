export function setupCheckout() {
    var btn = document.querySelector('.btn');
    var loader = document.querySelector('.loader');
    btn.classList.add('loading');
    loader.style.display = 'inline-block'
    //let counter = 0
    //const setCounter = (count) => {
    //  counter = count
    //  element.innerHTML = `script test - count is ${counter}`
    //}
    setTimeout(function(){
      btn.classList.remove('loading');
      loader.style.display = 'none';
    }, 2000);
    //element.addEventListener('click', () => setCounter(counter + 1))
    //setCounter(0)
  }