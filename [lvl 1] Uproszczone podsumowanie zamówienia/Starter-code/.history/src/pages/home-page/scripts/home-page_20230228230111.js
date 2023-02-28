/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

import { setupCheckout } from '../../../global-scripts/scripts/checkout/checkout.js'

const checkoutButton = document.querySelector('.order__checkout--button')

checkoutButton.addEventListener('click', async () => {
    setupCheckout();
    console.log('Processing checkout');
  });