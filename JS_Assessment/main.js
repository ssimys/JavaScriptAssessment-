console.log ("My Javascript assessment") ;
const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');
 
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;

class Field {
    field =[] ;
    constructor (){
        //the current location  of your character 
        this.locationX= 0 ;
        this.locationY=0 ;
        //creating 1 2D array
        for (let a= 0 ; a < col ; a++){
            this.field[a] = [];
        }
        //set the probability of generate a hole
    this.generateField(row ,col ,0.2);
    }



    generateField(height ,width,percentage 
        ) {
    for (let y = 0 ; y < height ; y++) {
        for (let x = 0 ; x < width ; x++){
            //Generate  random holes
            const prob = Math.random();
            this.field[y][x] = fieldCharacter ;
        } 
    }
 // set the "hat" location
 // set character position as [0][0]
    this.field[0][0] = pathCharacter ;
    }

    runGame() {
    // Implement your codes
    this.print() ;
    this.askQuestion() ;

    }          

    print(){
    clear();
    const displayString = this.field.map(row => {
        return row.join('');
    }).join('\n');
    console.log(displayString) ;

    }
    askQuestion() {
    const answer = prompt( 'Which way ?').toUpperCase();
    //implement your codes

    }

} //  End of class

const myfield =new Field();
myfield.runGame();




