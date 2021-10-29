import SauceLogin from '../pages/sauce_login.page'
<reference types = "cypress"/>




describe('Testes site SauceDemo rota login',() =>{
	beforeEach(() => {

		SauceLogin.acessarSauceDemo()

	})

	context('Deve conter user e password para logar',() =>{



		it('Acessar com site com Login invalido',()=>{
			SauceLogin.logar()


		})


		it('Acessar site com login invalido Login valido',()=>{
			SauceLogin.logarInvalido() 
	
		})

})