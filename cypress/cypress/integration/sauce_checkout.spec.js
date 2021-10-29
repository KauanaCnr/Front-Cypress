import SauceLogin from '../pages/sauce_login.page'
import SauceCheckout from '../pages/sauce_checkout.page'
<reference types = "cypress"/>

describe('Testes site SauceDemo rota login',() =>{
	beforeEach(() => {

		SauceLogin.acessarSauceDemo()

	})