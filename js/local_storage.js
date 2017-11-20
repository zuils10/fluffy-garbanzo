var ls = {
	__init: function() {
		ls.applySettings();
		ls.saveSettings();
	},
	applySettings: function() {
		var object_ls = window.localStorage;
		//read theme and apply
		var _saved_theme = object_ls.getItem('theme');
		if (_saved_theme == 1) {
			$('#useDarkTheme').prop('checked', _saved_theme).trigger('change');
		}
	},
	saveSettings: function() {
		var object_ls = window.localStorage;
		$('#useDarkTheme').on('change', function() {
			object_ls.setItem('theme', $('#useDarkTheme').prop('checked') ? 1 : 0);
		})
	}
};

$(document).ready(function() {
	ls.__init();
})