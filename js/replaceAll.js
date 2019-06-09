/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		var _toString = Object.prototype.toString;

		/**
		 * @name 정규식 확인
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		function _isRegExp(value) {
			return _toString.call(value) === '[object RegExp]';
		}

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
				if(typeof to === 'string' && typeof from === 'string' || _isRegExp(from)) {
					result = result.replace(new RegExp(from, 'g'), to);
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}