/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name replaceAll
		 * @param {string} value
		 * @param {string} from
		 * @param {string} to
		 * @return {string}
		 * @since 2018-07-13
		 */
		window.replaceAll = function(value, from, to) {
			var result = '';
			
			//문자일 때
			if(typeof value === 'string') {
				result = value;
				
				//문자일 때
				if(typeof from === 'string' && typeof to === 'string') {
					result = result.replace(new RegExp(from, 'g'), to);
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}