var quotes = [
    'We don\'t need holy wars. What we need is tolerance and brotherhood and simple humanity.',
    'Study how water flows in a valley stream, smoothly and freely between the rocks. Also learn from holy books and wise people. Everything - even muntains, rivers, plants and trees - should be your teacher.',
    'What difference does it make to the dead, the orphans, and the homeless, whether the mad destruction is wrought under the name of totalitarianism or the holy name of liberty or democracy?',
    'Religious fanatics want people to switch of there own minds, ignore the evidence, and blindly follow a holy book based upon private \'revelation\'',
    'When any government, or any church for that matter, undertakes to say to its subjects, this you may not read, this you must not see, this you you are forbidden to know, the end result is tiranny and opression no matters how holy the motives.',
    'No one should fear to undertake any task in the name of our Saviour, if it is just if the intention is purely for His holy service.'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}