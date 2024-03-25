console.log('Oggetti Studenti');

// Creare un array di oggetti di studenti
// Ogni oggetto studente deve avere tre proprietà:
// - Nome
// - Cognome
// - età

let studenti = [
    {
        name: 'Mario',
        surname: 'Rossi',
        age: 42
    },
    {
        name: 'Anna',
        surname: 'Verdi',
        age: 19
    },
    {
        name: 'Luca',
        surname: 'Bianchi',
        age: 33
    },
    {
        name: 'Francesco',
        surname: 'Esposito',
        age: 9
    },
    {
        name: 'Sofia',
        surname: 'Colombo',
        age: 21
    },
    {
        name: 'Francesca',
        surname: 'Lombardi',
        age: 67
    },
];

// Ciclo tutti gli studenti e stampo Nome e Cognome
// for (let i=0; i < studenti.length; i++) {
//     const studente = studenti[i];
//     console.log(studente.name, studente.surname);
// }

studenti.forEach (function(studenti) {
    console.log(`Nome: ${studenti.name}, Cognome: ${studenti.surname}`);
});

