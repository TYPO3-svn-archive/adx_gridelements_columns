/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 ************************************************************************************************
 *
 * @copyright 2012, Arno Dudek, http://www.adgrafik.at
 * @license The GNU General Public License, http://www.gnu.org/copyleft/gpl.html.
 *
 * This copyright notice MUST APPEAR in all copies of the script!
 *
 ************************************************************************************************
 ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


(function($){

	// Equals height of grid boxes.
	$.fn.equalHeight = function(){
		return this.height(Math.max.apply(this, $.map(this, function(element){ return $(element).height() })));
	}

	$(document).ready(function(){
		$('.equalHeight .contentWrap').equalHeight();
	});

})(jQuery);