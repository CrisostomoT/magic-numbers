import sweet from 'sweetalert2'
import './style.css'

// random value generated 
let y = Math.floor(Math.random() * 100 + 1);

// counting the number of guesses 
// made for correct Guess 
let guess = 1;

document.getElementById("guessBtn").onclick = () => {

    // number guessed by user      
    let x = document.getElementById("inputNumber").value;

    if (x == y) {
        sweet.fire({
            title: 'Congratulations! You have guessed in ' + guess + ' tries!',
            width: 600,
            padding: '3em',
            background: 'rgb(32, 179, 111)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://cdn2.scratch.mit.edu/get_image/gallery/5866565_170x100.png")
              left top
              no-repeat
            `
        });
    } else if (x > y)
    /* if guessed number is greater 
                  than actual number*/
    {
        guess++;
        sweet.fire({
            icon: 'error',
            title: 'Oops... Try a smaller number!',
        });
    } else {
        guess++;

        sweet.fire({
            icon: 'error',
            title: 'Oops... Try a greater number!',
        });
    }
}