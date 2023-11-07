let userInput, word, newWord, formName, checkSpace, phrase, hold, q, x, z, headerAni;
let phraseSplit = [], anotherSet = [];
    
$(document).ready(function() { //so that everything in DOM loads and can be read
    $('#header-text').mouseover(function() {
        if(document.getElementById('header-text').innerHTML == "Pig Latin Translator") {
            document.getElementById('header-text').innerHTML = "igPay atinLay anslatorTray";
        }else if(document.getElementById('header-text').innerHTML == "igPay atinLay anslatorTray") {
            document.getElementById('header-text').innerHTML = "Pig Latin Translator";
        };
    });

    formName = document.getElementById('pigLatin');
    $('#pigLatin').on("submit", function() { //to start the process of translation when form is submitted
        userInput = document.forms["pigLatin"]["input"].value; //the value of the form
        checkSpace = userInput.search(" "); //searches for spaces to check if it is a single word or phrase
        x = ""; //initialize an empty value of x, the consonant/cluster to be moved
        if(checkSpace < 0){ //if there is no space found, input is not a phrase
            word = userInput;
            if(word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u' || word[0] == 'A' || word[0] == 'E' || word[0] == 'I' || word[0] == 'O' || word[0] == 'U'){
                translate(1, word);
            }else{
                for(let i = 0; i < word.length; i++){ //checks for consonant clusters
                    if(word[i] == 'b' || word[i] == 'c' || word[i] == 'd' || word[i] == 'f' || word[i] == 'g' || word[i] == 'h' || word[i] == 'j' || word[i] == 'k' || word[i] == 'l' || word[i] == 'm' || word[i] == 'n' || word[i] == 'p' || word[i] == 'q' || word[i] == 'r' || word[i] == 's' || word[i] == 't' || word[i] == 'v' || word[i] == 'w' || word[i] == 'x' || word[i] == 'y' || word[i] == 'z' || word[i] == 'B' || word[i] == 'C' || word[i] == 'D' || word[i] == 'F' || word[i] == 'G' || word[i] == 'H' || word[i] == 'J' || word[i] == 'K' || word[i] == 'L' || word[i] == 'M' || word[i] == 'N' || word[i] == 'P' || word[i] == 'Q' || word[i] == 'R' || word[i] == 'S' || word[i] == 'T' || word[i] == 'V' || word[i] == 'W' || word[i] == 'X' || word[i] == 'Y' || word[i] == 'Z'){
                        x = x + word[i]; //as it finds a consonant, it adds to the cluster
                        // console.log(x);
                        z = i; 
                        // console.log(z);
                    }else{
                        return translate(2, word);
                    }
                }
            }            
        }else{ //space found, input is a phrase
            phrase = userInput;
            phraseSplit = phrase.split(" "); //splits the phrase into separate words
            // console.log(phraseSplit);
            var j = 0;
            while(j < phraseSplit.length){ //goes through each word and checks
                subPhrase = phraseSplit[j];
                if(subPhrase[0] == 'a' || subPhrase[0] == 'e' || subPhrase[0] == 'i' || subPhrase[0] == 'o' || subPhrase[0] == 'u' || subPhrase[0] == 'A' || subPhrase[0] == 'E' || subPhrase[0] == 'I' || subPhrase[0] == 'O' || subPhrase[0] == 'U'){
                    overset(1, subPhrase);
                }else{
                    for(let t = 0; t < subPhrase.length; t++){
                        if(subPhrase[t] == 'b' || subPhrase[t] == 'c' || subPhrase[t] == 'd' || subPhrase[t] == 'f' || subPhrase[t] == 'g' || subPhrase[t] == 'h' || subPhrase[t] == 'j' || subPhrase[t] == 'k' || subPhrase[t] == 'l' || subPhrase[t] == 'm' || subPhrase[t] == 'n' || subPhrase[t] == 'p' || subPhrase[t] == 'q' || subPhrase[t] == 'r' || subPhrase[t] == 's' || subPhrase[t] == 't' || subPhrase[t] == 'v' || subPhrase[t] == 'w' || subPhrase[t] == 'x' || subPhrase[t] == 'y' || subPhrase[t] == 'z' || subPhrase[t] == 'B' || subPhrase[t] == 'C' || subPhrase[t] == 'D' || subPhrase[t] == 'F' || subPhrase[t] == 'G' || subPhrase[t] == 'H' || subPhrase[t] == 'J' || subPhrase[t] == 'K' || subPhrase[t] == 'L' || subPhrase[t] == 'M' || subPhrase[t] == 'N' || subPhrase[t] == 'P' || subPhrase[t] == 'Q' || subPhrase[t] == 'R' || subPhrase[t] == 'S' || subPhrase[t] == 'T' || subPhrase[t] == 'V' || subPhrase[t] == 'W' || subPhrase[t] == 'X' || subPhrase[t] == 'Y' || subPhrase[t] == 'Z'){
                            x = x + subPhrase[t];
                            // console.log(x);
                            q = t;
                            // console.log(q);
                        }else{
                            overset(2, subPhrase);
                            x = ""; //to ensure that x does not still carry the consonant/cluster form the previous word, to avoid error.
                            break;
                        }
                    }
                } 
                j++;           
            }
        } 
        function translate(y, subject){ //y signifies the type of translation to be done, 1 or 2
            if(y == 1){ //if y = 1, then 'way' is added to the end
                newWord = subject + '-way';
            }else if(y == 2){ //if y = 2, then the consonant/cluster is taken to the end, followed by 'ay'
                newWord = subject.slice(z + 1, (subject.length)); //the string is cut, from the first vowel to the end
                newWord = newWord + "-" + x + "ay"; //the consonant or cluster is attached at the end
            }
            showIt(newWord);
        }
        function overset(s, target){
            if(s == 1){
                newWord = target + 'way';
                anotherSet.push(newWord);
                newPhrase = anotherSet.join(" ");
            }else if(s == 2){
                newWord = target.slice(q + 1, (target.length));
                newWord = newWord + x + "ay";
                anotherSet.push(newWord); //after translating the individual words, they are added to a new array
                newPhrase = anotherSet.join(" "); //the words are then joined back into a phrase
            }
            showIt(newPhrase);
        }        
        function showIt(a) { //a function to display the result of the translation
            $('#show-box').html(a);
            document.forms["pigLatin"]["input"].value = userInput;
        }      
    })

    $('#clear-button').click(function() {
        document.forms['pigLatin']['input'].value = "";
        document.getElementById('show-box').innerHTML = "";
    });
})
