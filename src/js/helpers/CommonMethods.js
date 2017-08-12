const CommonMethods = {
  placeValueLookup: function(val) {
		const options = {
			'ones': 0,
			'tens': 1,
			'hundreds': 2,
		}
		return options[val];
  }
}

export default CommonMethods;