export default {
	getAutoBinder: self => names => names.reduce( (acc, name) => {
			acc[name] = self[name].bind(self);
			return acc;
		}, {})
};