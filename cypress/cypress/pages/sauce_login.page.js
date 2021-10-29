import BASE from './_base.page'
import {LOGIN} from '../elements/sauce.elements'

export default class SauceLogin extends Base{

	static acessarSauceDemo(){
		cy.visit('${Cypres.env('baseUrl')}')

	}

	static logar(usuario = 'standard_user'){

		super.typeValue(INP_USER, usuario)
		super.typeValue(INP_PASSWORD, '${Cypres.env('password')}')
		super.clickOnElement(BTN_LOGIN)
		super.validarUrl('/inventory.html')
	}

	static logarInvalido(usuario = ''){
		super.typeValue(INP_USER, usuario)
		super.typeValue(INP_PASSWORD, '${Cypres.env('password')}')
		super.clickOnElement(BTN_LOGIN)
		super.validarUrl('/inventory.html')
	}
}