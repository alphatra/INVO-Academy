export function setupCheckout(element) {
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