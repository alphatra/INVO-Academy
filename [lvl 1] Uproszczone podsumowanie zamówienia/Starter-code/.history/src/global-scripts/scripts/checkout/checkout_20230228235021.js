export function setupCheckout(element) {
  const orderBody = document.querySelector('.order');
  const toggleButtonState = () => {
    element.disabled = true;
    element.innerHTML = "Loading...";
    orderBody.classList.toggle('loading');

    new Promise(resolve => setTimeout(resolve, 2000))
      .then(() => {
        orderBody.classList.toggle('loading');
        element.disabled = false;
        element.innerHTML = "Click me!";
      });
  };

  element.addEventListener("click", toggleButtonState);
}