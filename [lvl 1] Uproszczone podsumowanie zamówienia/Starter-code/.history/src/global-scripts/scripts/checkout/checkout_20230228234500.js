export function setupCheckout(element) {
  //document.querySelector('.order').classList.toggle('loading')

  const toggleButtonState = () => {
    element.disabled = true;
    element.innerHTML = "Loading...";
    new Promise(resolve => setTimeout(resolve, 2000))
      .then(() => {
        element.disabled = false;
        element.innerHTML = "Click me!";
      });
  };

  element.addEventListener("click", toggleButtonState);
}