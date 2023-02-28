export function setupCheckout(element) {
  const orderBody = document.querySelector('.order');
  const spinner = document.querySelector('$loading-spinner');
  const toggleButtonState = () => {
    element.disabled = true;
    element.innerHTML = "Loading...";
    orderBody.classList.toggle('loading');
    spinner.style.display = "block";

    new Promise(resolve => setTimeout(resolve, 6000))
      .then(() => {
        orderBody.classList.toggle('loading');
        spinner.style.display = "none";
        element.disabled = false;
        element.innerHTML = "Click me!";
      });
  };

  element.addEventListener("click", toggleButtonState);
}