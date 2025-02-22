/**
 * Για να λάβουμε input 
 * 1. θα πρέπει να έχουμε ένα στοιχείο όπως το textbox (<input
    type=“text“>

    2.  θα πρέπει να υπάρχει ένα event που να σηματοδοτεί ότι
        έχει δοθεί το κείμενο στο textbox και να γίνει κάποια ενέργεια μέσω μίας
        συνάρτησης που κάνει handle το event (event handler).

        Το event αυτό είναι το
        click event που ενεργοποιεί ο χρήστης με το click στο button
        στο button εχουμε βαλει onclick να εκτελειται η printText()

 */

function printText() {
    //παιρνει σαν input οτι ειναι γραμμενο στο inputText
    const text = document.getElementById('inputText').value
    //το βαζει στο <p> που εχει id helloText
    document.getElementById('helloText').innerHTML = text
}