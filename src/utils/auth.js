const auth = (function () {
	return {
		loggedInUser: function () {
			try {
				return JSON.parse(localStorage.getItem('user'));
			} catch (e) {
				return null;
			}
		},

		isLoggedIn: function () {
			const item = localStorage.getItem('user');
			return item && item !== 'null';
		},

		login: function(new_user) {
			localStorage.setItem('user', JSON.stringify(new_user));
		},

		logout: function() {
			localStorage.setItem('user', null);
		}
	}
})();

export default auth;
