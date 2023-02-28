/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

import { setupCounter } from '../../../global-scripts/scripts/checkout/checkout.js'

setupCounter(document.querySelector('#counter'))

