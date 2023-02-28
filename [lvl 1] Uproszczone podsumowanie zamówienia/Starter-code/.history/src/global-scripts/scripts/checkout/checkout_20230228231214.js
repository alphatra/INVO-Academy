export function setupCounter(element) {
  const toggleButtonState = () => {
    element.disabled = true;
    element.innerHTML = "Loading...";
    new Promise(resolve => setTimeout(resolve, 3000))
      .then(() => {
        element.disabled = false;
        element.innerHTML = "Click me!";
      });
  };

  element.addEventListener("click", toggleButtonState);
}