var ls = {
	__init: function() {
		ls.applySettings();
		ls.saveSettings();
	},
	applySettings: function() {
		var object_ls = window.localStorage;
		//read theme and apply
		var _saved = object_ls.getItem('theme');
		if (_saved == 1) {
			$('#useDarkTheme').prop('checked', _saved).trigger('change');
		}

		//read flagCalculateOtherAncients and apply
		_saved = object_ls.getItem('flagCalculateOtherAncients');
		if (_saved == 1) {
			$('#flagCalculateOtherAncients').prop('checked', _saved).trigger('change');
		}

		//read otherAncientsLower and apply
		var _saved = object_ls.getItem('otherAncientsLower');
		if (_saved != null) {
			$('#otherAncientsLower').val(_saved).trigger('change');
		}

		//read otherAncientsLowerBase and apply
		var _saved = object_ls.getItem('otherAncientsLowerBase');
		if (_saved != null) {
			$('#otherAncientsLowerBase').val(_saved).trigger('change');
		}
	},
	saveSettings: function() {
		var object_ls = window.localStorage;
		$('#useDarkTheme').on('change', function() {
			object_ls.setItem('theme', $('#useDarkTheme').is(':checked') ? 1 : 0);
		});
		$('#flagCalculateOtherAncients').on('change', function() {
			object_ls.setItem('flagCalculateOtherAncients', $('#flagCalculateOtherAncients').is(':checked') ? 1 : 0);
		});
		$('#otherAncientsLower').on('change', function() {
			object_ls.setItem('otherAncientsLower', $('#otherAncientsLower').val());
		});
		$('#otherAncientsLowerBase').on('change', function() {
			object_ls.setItem('otherAncientsLowerBase', $('#otherAncientsLowerBase').val());
		});
	}
};

$(document).ready(function() {
	ls.__init();
})