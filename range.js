const TYPES = Object.freeze({
	NUMBER: 'number',
	STRING: 'string'
});

function range(a, b) {
	if (typeof a === TYPES.NUMBER && typeof b === TYPES.NUMBER) {
		if (a > b) return;

		const range = [];
		for(let i = a + 1; i < b; i++) {
			range.push(i);
		}
		return range;
	}	
	
	if (typeof a === TYPES.STRING && typeof b === TYPES.STRING) {
		if (a.length !== 1 && b.length !== 1) return;
		
		const min = 97; // char code for lowercase 'a' 
		const max = 122; // char code for lowercase 'z'

		a = a.toLowerCase().charCodeAt(0);
		b = b.toLowerCase().charCodeAt(0); 

		if ((a < min  || a > max) || (b < min || b > max)) return;

		const range = [];
		for (let i = a + 1; i < b; i++) {
			range.push(String.fromCharCode(i))
		}

		return range;
	}

}


const r = range(88, 100);
const s = range('a', 'z');
const t = range(1, 'a');

console.table({'88-100': r, 'a-z': s, '1-a': t});


/* OUTPUT: 
┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬───────────┐
│ (index) │  0  │  1  │  2  │  3  │  4  │  5  │  6  │  7  │  8  │  9  │ 10  │ 11  │ 12  │ 13  │ 14  │ 15  │ 16  │ 17  │ 18  │ 19  │ 20  │ 21  │ 22  │ 23  │  Values   │
├─────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼───────────┤
│ 88-100  │ 89  │ 90  │ 91  │ 92  │ 93  │ 94  │ 95  │ 96  │ 97  │ 98  │ 99  │     │     │     │     │     │     │     │     │     │     │     │     │     │           │
│   a-z   │ 'b' │ 'c' │ 'd' │ 'e' │ 'f' │ 'g' │ 'h' │ 'i' │ 'j' │ 'k' │ 'l' │ 'm' │ 'n' │ 'o' │ 'p' │ 'q' │ 'r' │ 's' │ 't' │ 'u' │ 'v' │ 'w' │ 'x' │ 'y' │           │
│   1-a   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │ undefined │
└─────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴───────────┘
*/