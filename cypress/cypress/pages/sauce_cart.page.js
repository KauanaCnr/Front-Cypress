import BASE from './_base.page'
import {CART} from '../elements/sauce.elements'
import {PRODUCTS} from '../elements/sauce.elements'


export default class SauceCart extends Base{


	static accessCart(){
		super.clickOnElement(BTN_CART)
		super.validarUrl('/cart.html')

	}
	static removeItem(){
		super.typeValue(LIST_PRODUCTS)
		super.verifyIfElementExists('contain' , 'Sauce Labs BackPack')
		super.clickOnElement(BTN_ADD_BACKPACK)
		super.typeValue(REMOVE_BACKPACK)
		super.getElementContaining('contain' , 0)
	}

	static clickContinueShopping(){
		super.clickOnElement(BTN_CONTINUE)
		super.validarUrl('/inventory.html')
	}

	static clickCheckout(){
		super.clickOnElement(BTN_CHECKOUT)
		super.validarUrl('/checkout-step-one.html')
	}
	
	
}

