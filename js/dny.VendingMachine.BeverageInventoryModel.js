/**
 * @description 
 * @class dny.VendingMachine.BeverageInventoryModel
 * @names dny.VendingMachine
 * @namespace
 * @author 
 * @version 1.0.0
 * @since February 13, 2012
 * @copyright Copyright (c) 2012, NHN Technology Services inc.
 * @generated by Jindo2 Code Generator v1.0.3
 */
dny.VendingMachine.BeverageInventoryModel = jindo.$Class({
	/** @lends dny.VendingMachine.BeverageInventoryModel.prototype */

	/**
     * @description Product name.
	 * @private
	 * @type String
	 */
	_sProductName : null,
	/**
     * @description Sell price.
	 * @private
	 * @type Number
	 */
	_nSellPrice : null,
	/**
     * @description Beverage entity. 
	 * @private
	 * @type Wrapping Array of Wrapping Object
	 */
	_wawoBeverageEntity : null,

	/**
     * @description $init.
	 * @public
	 * @constructs
	 * @param {String} sProductName
	 * @param {Number} nSellPrice
	 * @param {Number} nCount
	 */
	$init : function(sProductName, nSellPrice, nCount) {
		this._sProductName = sProductName;
		this._nSellPrice = nSellPrice;
		this._wawoBeverageEntity = new jindo.$A();
		this.fillBeverage(nCount);
	},

	/**
     * @description Fill beverage.
	 * @public
	 * @param {Number} nCount
	 */
	fillBeverage : function(nCount) {
		for(var i=0; i<nCount; i++){
			this._wawoBeverageEntity.push(new dny.VendingMachine.BeverageEntity(this._sProductName));
		}
	},

	/**
     * @description Dispense beverage.
	 * @public
	 * @returns {Wrapping Object}
	 */
	dispenseBeverage : function() {
		return this._wawoBeverageEntity.shift();
	},

	/**
     * @description Get sell price.
	 * @public
	 * @returns {Number}
	 */
	getSellPrice : function() {
		return this._nSellPrice;
	},

	/**
     * @description Get product name.
	 * @public
	 * @returns {String}
	 */
	getProductName : function() {
		return this._sProductName;
	},

	/**
     * @description Get quantity.
	 * @public
	 * @returns {Number}
	 */
	getQuantity : function() {
		return this._wawoBeverageEntity.length();
	},

	/**
     * @description Is empty?
	 * @public
	 * @return {Boolean}
	 */
	isEmpty : function() {
		return (this._wawoBeverageEntity.length() == 0) ? true : false;
	}

});

