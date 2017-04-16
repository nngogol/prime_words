// little hack
let cw = console.log;

const alphabets = {
	"en" : {
		"1to26" : 		{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26},
		"1379" : 		{"a":1,"b":3,"c":7,"d":9,"e":1,"f":3,"g":7,"h":9,"i":1,"j":3,"k":7,"l":9,"m":1,"n":3,"o":7,"p":9,"q":1,"r":3,"s":7,"t":9,"u":1,"v":3,"w":7,"x":9,"y":1,"z":3},
		"primes_1" : 	{"a":3,"b":5,"c":7,"d":11,"e":13,"f":17,"g":19,"h":23,"i":29,"j":31,"k":37,"l":41,"m":43,"n":47,"o":53,"p":59,"q":61,"r":67,"s":71,"t":73,"u":79,"v":83,"w":89,"x":97,"y":101,"z":103},
		"primes_2" : 	{"a":1,"b":3,"c":5,"d":7,"e":11,"f":13,"g":17,"h":19,"i":23,"j":29,"k":31,"l":37,"m":41,"n":43,"o":47,"p":53,"q":59,"r":61,"s":67,"t":71,"u":73,"v":79,"w":83,"x":89,"y":97,"z":101}
	},
	"ru" : {
		"1to26" : 		{"а":1,"б":2,"в":3,"г":4,"д":5,"е":6,"ё":7,"ж":8,"з":9,"и":10,"й":11,"к":12,"л":13,"м":14,"н":15,"о":16,"п":17,"р":18,"с":19,"т":20,"у":21,"ф":22,"х":23,"ц":24,"ч":25,"ш":26,"щ":27,"ъ":28,"ы":29,"ь":30,"э":31,"ю":32,"я":33},
		"1379" : 		{"а":1,"б":3,"в":7,"г":9,"д":1,"е":3,"ё":7,"ж":9,"з":1,"и":3,"й":7,"к":9,"л":1,"м":3,"н":7,"о":9,"п":1,"р":3,"с":7,"т":9,"у":1,"ф":3,"х":7,"ц":9,"ч":1,"ш":3,"щ":7,"ъ":9,"ы":1,"ь":3,"э":7,"ю":9,"я":1},
		"primes_1" : 	{"а":1,"б":3,"в":5,"г":7,"д":11,"е":13,"ё":17,"ж":19,"з":23,"и":29,"й":31,"к":37,"л":41,"м":43,"н":47,"о":53,"п":59,"р":61,"с":67,"т":71,"у":73,"ф":79,"х":83,"ц":89,"ч":97,"ш":101,"щ":103,"ъ":107,"ы":109,"ь":113,"э":127,"ю":131,"я":137},
		"primes_2" : 	{"а":3,"б":5,"в":7,"г":11,"д":13,"е":17,"ё":19,"ж":23,"з":29,"и":31,"й":37,"к":41,"л":43,"м":47,"н":53,"о":59,"п":61,"р":67,"с":71,"т":73,"у":79,"ф":83,"х":89,"ц":97,"ч":101,"ш":103,"щ":107,"ъ":109,"ы":113,"ь":127,"э":131,"ю":137,"я":139}
	},
	"ua" : {
		"1to26" : 		{"а":1,"б":2,"в":3,"г":4,"ґ":5,"д":6,"е":7,"є":8,"ж":9,"з":10,"и":11,"і":12,"ї":13,"й":14,"к":15,"л":16,"м":17,"н":18,"о":19,"п":20,"р":21,"с":22,"т":23,"у":24,"ф":25,"х":26,"ц":27,"ч":28,"ш":29,"щ":30,"ь":31,"ю":32,"я":33},
		"1379" : 		{"а":1,"б":3,"в":7,"г":9,"ґ":1,"д":3,"е":7,"є":9,"ж":1,"з":3,"и":7,"і":9,"ї":1,"й":3,"к":7,"л":9,"м":1,"н":3,"о":7,"п":9,"р":1,"с":3,"т":7,"у":9,"ф":1,"х":3,"ц":7,"ч":9,"ш":1,"щ":3,"ь":7,"ю":9,"я":1},
		"primes_1" : 	{"а":1,"б":3,"в":5,"г":7,"ґ":11,"д":13,"е":17,"є":19,"ж":23,"з":29,"и":31,"і":37,"ї":41,"й":43,"к":47,"л":53,"м":59,"н":61,"о":67,"п":71,"р":73,"с":79,"т":83,"у":89,"ф":97,"х":101,"ц":103,"ч":107,"ш":109,"щ":113,"ь":127,"ю":131,"я":137},
		"primes_2" : 	{"а":3,"б":5,"в":7,"г":11,"ґ":13,"д":17,"е":19,"є":23,"ж":29,"з":31,"и":37,"і":41,"ї":43,"й":47,"к":53,"л":59,"м":61,"н":67,"о":71,"п":73,"р":79,"с":83,"т":89,"у":97,"ф":101,"х":103,"ц":107,"ч":109,"ш":113,"щ":127,"ь":131,"ю":137,"я":139}
	}
}

const isPrime =  number => {
    let start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

const RoundTo1379 = n => {
	//						   last digit
	while(![1,3,7,9].includes( (n % 10) )){
		n+=1;
	}
	return n;
}

//		'j'	=>  20	or 18 or 3 or ...							язык languege мова
const CharToNum = (cha, alpha_version="1379", lang='en') => alphabets[lang][alpha_version][cha];

//		'245433'  => num
const ArrOfCharsCodedxToNum_Adding = chars => chars.reduce( (prev,curr) => curr + prev, 0);


const ArrOfCharsCodedxToNum_Mult_v2 = str =>
	str
	.reduce( (prev,curr) => {

		if (curr == 0 ) {
			return prev
		}else if(curr == 1){
			return prev+1
		}else{	
			return curr * prev
		}
	}, 1);
const ArrOfCharsCodedxToNum_Mult_v1 = str =>
	str
	.reduce( (prev,curr) => {

		if (curr == 0 ) {
			return prev
		}else{	
			return curr * prev
		}
	}, 1);
const ArrOfCharsCodedxToNum_concatSTR = arr =>
	//			Plaintext => big number
							arr
							.join('');


function Processss(name){

	let chars = name.toLowerCase().split('');

	let mr_1_alg = ArrOfCharsCodedxToNum_Adding(
		chars
		.map( cha => CharToNum(cha, '1to26') )
		)

	let mr_2_alg = ArrOfCharsCodedxToNum_Adding(
		chars
		.map( cha => CharToNum(cha, '1379') )
		)

	let mr_3_alg = ArrOfCharsCodedxToNum_Adding(
		chars
		.map( cha => CharToNum(cha, 'primes_1') )
		)

	let mr_4_alg = ArrOfCharsCodedxToNum_Adding(
		chars
		.map( cha => CharToNum(cha, 'primes_2') )
		)

	cw('------------------')
	cw('word is ' + name)
	cw('method 1 (1to26) 	=> ', RoundTo1379(mr_1_alg), 'boool : ', isPrime(RoundTo1379(mr_1_alg)))
	cw('method 2 (1379) 	=> ', RoundTo1379(mr_2_alg), 'boool : ', isPrime(RoundTo1379(mr_2_alg)))
	cw('method 3 (primes_1) => ', RoundTo1379(mr_3_alg), 'boool : ', isPrime(RoundTo1379(mr_3_alg)))
	cw('method 4 (primes_2) => ', RoundTo1379(mr_4_alg), 'boool : ', isPrime(RoundTo1379(mr_4_alg)))
}

function Processss2(name){

	let chars = name.toLowerCase().split('');

	let mr_1_alg = ArrOfCharsCodedxToNum_concatSTR(chars.map( cha => CharToNum(cha, '1to26') ))

	let mr_2_alg = ArrOfCharsCodedxToNum_concatSTR(chars.map( cha => CharToNum(cha, '1379') ))

	let mr_3_alg = ArrOfCharsCodedxToNum_concatSTR(chars.map( cha => CharToNum(cha, 'primes_1') ))

	let mr_4_alg = ArrOfCharsCodedxToNum_concatSTR(chars.map( cha => CharToNum(cha, 'primes_2') ))

	cw('------------------')
	cw('word is ' + name)
	cw('method 1 (1to26) 	|| ', name ,' => ', RoundTo1379(mr_1_alg), ' : ', isPrime(RoundTo1379(mr_1_alg)))
	cw('method 2 (1379) 	|| ', name ,' => ', RoundTo1379(mr_2_alg), ' : ', isPrime(RoundTo1379(mr_2_alg)))
	cw('method 3 (primes_1) || ', name ,' => ', RoundTo1379(mr_3_alg), ' : ', isPrime(RoundTo1379(mr_3_alg)))
	cw('method 4 (primes_2) || ', name ,' => ', RoundTo1379(mr_4_alg), ' : ', isPrime(RoundTo1379(mr_4_alg)))
}

const tests = ['HelloWrold','SmallBig','JojiJo','Test','Text','Prime', 'fluffikin']

//							word without ' ' (spaces)
// tests.map( word =>  Processss(word) );
tests.map( word =>  Processss2(word) );
