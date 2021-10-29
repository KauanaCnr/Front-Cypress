import BASE from './_base.page'
import {NAVBAR} from '../elements/sauce.elements'


export default class SauceNavBar extends Base{

	static accessNavBar(){
		super.clickOnElement(BTN_NAVBAR)

	}
	static accessAllItems(){
		super.clickOnElement(ALL_ITEMS)
		super.validarUrl('/inventory.html')
	}

	static accessAbout(){
		super.clickOnElement(ABOUT)
		super.validarUrl('https://saucelabs.com')
	}

	static accessResetSite (){
		super.clickOnElement(RESET_APP_STATE)
	}

	static accessLogout(){
		super.clickOnElement(LOGOUT)
		super.validarUrl('${Cypres.env('baseUrl')}')
		
	}

	


	
}

