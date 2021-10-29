import SauceLogin from '../pages/sauce_login.page'
import SauceNavBar from '../pages/sauce_nav_bar.page'
<reference types = "cypress"/>




describe('Testes site SauceDemo rota login',() =>{
	beforeEach(() => {

		SauceLogin.acessarSauceDemo()

	})

	context('Deve conter user e password para logar',() =>{
		beforeEach(() => {

			SauceLogin.logar()

	})

		it('Acessar o navBar na pagina inventory',()=>{
			SauceNavBar.accessNavBar()
		})


		it('Acessar o all items no navBar',()=>{
			SauceNavBar.accessAllItems() 
	
		})


		it('Acessar o about no navBar',()=>{
			SauceNavBar.accessAbout()
		})


		it('Fazer  o logout no navBar',()=>{
			SauceNavBar.accessLogout() 
	
		})


		it('Resetar  o site no navBar',()=>{
			SauceNavBar.accessResetSite() 
	
		})

})
