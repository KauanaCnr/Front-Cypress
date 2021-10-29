
import SauceLogin from '../pages/sauce_login.page'
import SauceProducts from '../pages/sauce_products.page'
<reference types = "cypress"/>




describe('Testes site SauceDemo rota login',() =>{
	beforeEach(() => {

		SauceLogin.acessarSauceDemo()

	})