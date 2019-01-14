// Word & Letter Bank
var words = [ "pikes", "longs", "evans", "elbert", "massive", "capitol", "princeton", "sneffels", "grays", "harvard", "crestone", "columbia", "eolus", "blanca", "culebra", "clark", "quandary", "windom", "uncompahgre", "lincoln", "antero", "castle"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(words)

        //In game variables
// Randomly picked word for game
var RndWord = "";

// number of lives/guesses remaining
var GuessesRemaining = 9;
// counter for wins
var WinTotal = 0;
// counter for loses
var LossTotal = 0;
// holds letters in word
var lettersInWord = [];
//  blanks in word
var blanks = 0;
// blanks and correct letters
var blanksAndletters =[];
// holds wrong guesses
var wrongguesses = [];
// correct guesses 
var correctguess = [];

console.log(RndWord);
console.log(GuessesRemaining);

// game reset

function reset()
{
	//Pick a random word
	// RndWord = words[Math.floor(Math.random() * words.length)];
	console.log(RndWord);
	// Splits up letters in word
	lettersInWord = RndWord.split('');
	// Set blanks for word
	blanks = lettersInWord.length;

	// In game counters resets
	userguess = 0;
	correctguess = 0;
	GuessesRemaining = 9;
	letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	wrongguesses = [];
	blanksAndletters = [];
	startGame();
	
}
console.log(userguess);


function startGame()
{
	userguess = 0;
	correctguess = 0;
	GuessesRemaining = 9;
	letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	wrongguesses = [];
	blanksAndletters = [];

	//Pick a random word
	RndWord = words[Math.floor(Math.random() * words.length)].toString();
	console.log(RndWord);
	// Splits up letters in word
	lettersInWord = RndWord.split('');
	console.log(lettersInWord)
	// Set blanks for word
	blanks = lettersInWord.length;
	console.log(lettersInWord);
	console.log(blanks);

	for(var i = 0; i < blanks; i++)
	{
		blanksAndletters[i] = ' _ ';
		document.getElementById('wordToGuess').innerHTML = blanksAndletters;
	}
	document.getElementById('wordToGuess').innerHTML = blanksAndletters.join(' ');
	document.getElementById('wrongGuesses').innerHTML = wrongguesses;
	document.getElementById('user-lives').innerHTML = GuessesRemaining;
	document.getElementById('wins').innerHTML = WinTotal;
	document.getElementById('loses').innerHTML = LossTotal;

}




// In game function to check guesses
function checkanswer(userKey) 
{
	if(RndWord.indexOf(userKey) > -1) 
	{
		for(var i = 0; i < blanks; i++)
		{
			if(lettersInWord[i] === userKey)
			{
				correctguess++;
				blanksAndletters[i] = userKey;
				document.getElementById('wordToGuess').innerHTML = blanksAndletters.join(' ');
			}
		}
	}
	//Wrong guess
	
	else 
	{
		GuessesRemaining--;
		wrongguesses.push(userKey);
		//Changes HTML
		document.getElementById('user-lives').innerHTML = GuessesRemaining;
		document.getElementById('wrongGuesses').innerHTML = wrongguesses;
	}	
}
console.log(blanksAndletters);
console.log(lettersInWord);


//Initiates the Code
startGame();

document.onkeydown = function(event)
{
	var userguess = event.key;
	for(var i = 0; i < letters.length; i++)
	{	
		if(userguess === letters[i])
		{
			var doubles = letters.splice(i,1);
			checkanswer(userguess);
			winOrlose();
		}
	}		
}

// Win / Lose function
function winOrlose () 
{
	if (correctguess === blanks) 
	{
		WinTotal++;
		document.getElementById('wins').innerHTML = WinTotal;
		alert('You Win');
		reset();
	}
	else if( GuessesRemaining === 0)
	{
		LossTotal++;
		document.getElementById('loses').innerHTML = LossTotal;
		alert('You Lose');
		reset();
	}
}
