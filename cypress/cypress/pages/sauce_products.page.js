import BASE from './_base.page'
import {PRODUCTS} from '../elements/sauce.elements'

export default class SauceProducts extends Base{


	static productInCart(){
		super.typeValue(LIST_PRODUCTS)
		super.verifyIfElementExists('contain' , 'Sauce Labs BackPack')
		super.clickOnElement(BTN_BTN_ADD_BACKPACK)
		super.typeValue(NUM_CART)
		super.getElementContaining('contain' , 1)
		
	}


}
