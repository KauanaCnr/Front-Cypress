import SauceLogin from '../pages/sauce_login.page'
import SauceCart from '../pages/sauce_cart.page'
<reference types = "cypress"/>




describe('Testes site SauceDemo rota cart',() =>{
	beforeEach(() => {

		SauceLogin.acessarSauceDemo()

	})
	context('Deve conter user e password para logar',() =>{
		beforeEach(() => {

			SauceLogin.logar()

	})


		it('Acessar pagina cart',()=>{
			SauceCart.accessCart()
		})


		it('Remover item do cart',()=>{
			SauceCart.removeItem() 
	
		})


		it('Click em botão continue shopping',()=>{
			SauceCart.clickContinueShopping()
		})


		it('Click em botão checkout',()=>{
			SauceCart.clickCheckout() 
	
		})




})

