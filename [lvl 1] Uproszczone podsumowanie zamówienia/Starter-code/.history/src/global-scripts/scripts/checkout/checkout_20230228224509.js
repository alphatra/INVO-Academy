export function setupCheckout(element) {
    let counter = 0
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `script test - count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }