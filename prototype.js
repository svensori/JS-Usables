const CUSTOM_PROP =  'myMethod';

if (!Date.hasOwnProperty(CUSTOM_PROP)) {
	Object.defineProperty(Date.prototype, CUSTOM_PROP, {
		value: function(name) {
			return `Hi ${name}! Our date today is ` + this.toUTCString();
		}
	});
}

const date = new Date();
console.log(date.myMethod('Steven'));