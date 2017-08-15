var decoder = {
	decode_main: function(inputString) {
		var zlibHeader = "7a990d405d2c6fb93aa8fbb0ec1a3b23";
		var output = '';
		if (inputString.substring(0, 32) == zlibHeader) {
			console.log('encode type: zlib');
			$('#saveGameType').val('zlib');
			output = decoder.decode_zlib(inputString);
		}
		else {
			console.log('encode type: base64');
			$('#saveGameType').val('base64');
			output = decoder.decode_base64(inputString);
		}
		return output;
	},

	decode_base64: function(inputString) {
		var output = '';
		if (inputString.indexOf(ANTI_CHEAT_CODE) > 0) {
	        inputString = inputString.split(ANTI_CHEAT_CODE)[0];
	        _loc1 = inputString.split('');
	        _loc2 = _loc1.filter(function(val, index) {
	        	return (index % 2 === 0);
	        });
	       	_loc3 = _loc2.join('');
	        output = JSON.parse(atob(_loc3));
	    }
	    else {
	    	output = JSON.parse(inputString);
	    }
	    return output;
	},

	decode_zlib: function(inputString) {
		pako = window.pako;
		_loc1 = inputString.substring(32);
		_loc2 = atob(_loc1);
		output = JSON.parse(pako.inflate(_loc2, {to: 'string'}));
		return output;
	},
};