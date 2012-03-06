/**
 * @description 
 * @class dny.VendingMachine.MyMoneyBagModel
 * @names dny.VendingMachine
 * @namespace
 * @author 
 * @version 1.0.0
 * @since February 13, 2012
 * @copyright Copyright (c) 2012, NHN Technology Services inc.
 * @generated by Jindo2 Code Generator v1.0.3
 */
dny.VendingMachine.MyMoneyBagModel = jindo.$Class({
	/** @lends dny.VendingMachine.MyMoneyBagModel.prototype */

	/**
     * @description Current money.
	 * @private
	 * @type Number
	 */
	_nCurrentMoney : null,

	/**
     * @description $init.
	 * @public
	 * @constructs
	 * @param {Number} nCurrentMoney
	 */
	$init : function(nCurrentMoney) {
		this._nCurrentMoney = nCurrentMoney;
	},

	/**
     * @description Spend money.
	 * @public
	 * @param {Number} nMoney
	 */
	spendMoney : function(nMoney) {
		this._nCurrentMoney = this._nCurrentMoney - nMoney;
	},

	/**
     * @description Get money back.
	 * @public
	 * @param {Number} nMoney
	 */
	getMoneyBack : function(nMoney) {
		this._nCurrentMoney = this._nCurrentMoney + nMoney;
	},

	/**
     * @description Earn money.
	 * @public
	 * @param {Number} nMoney
	 */
	earnMoney : function(nMoney) {
		this._nCurrentMoney = this._nCurrentMoney + nMoney;
	},
	
	/**
	 * @description Get current money.
	 * @returns {Number}
	 */
	getCurrentMoney : function(){
		return this._nCurrentMoney;
	}

});
