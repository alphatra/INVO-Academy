export function setupCheckout(element) {
  const orderBody = document.querySelector('.order');
  const spinner = document.querySelector('.spinner');
  const toggleButtonState = () => {
    element.disabled = true;
    element.innerHTML = "Loading...";
    orderBody.classList.toggle('loading');
    spinner.style.display = "contents";

    new Promise(resolve => setTimeout(resolve, 6000))
      .then(() => {
        spinner.style.display = "none";
        orderBody.classList.toggle('loading');
        
        element.disabled = false;
        element.innerHTML = "Click me!";
      });
  };

  element.addEventListener("click", toggleButtonState);
}