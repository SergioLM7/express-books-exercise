const books = require('./data/books.json');
const express = require('express');
const app = express(); //Inicializa el servidor y lo guarda en una variable 'app'
const port = 3000; //El puerto en el que se va a lanzar el servidor

//1.Crea una ruta /all para obtener todos los libros
app.get('/all', (req, res) => {
   res.json(books);
});

//2.Crea una ruta /first para obtener el primer libro
app.get('/first', (req, res) => {
    res.json(books[0]);
 });

 //3.Crea una ruta /last para obtener el último libro
 app.get('/last', (req, res) => {
    res.json(books.pop());
 });

 //4.Crea una ruta /middle para obtener el libro en la mitad (número 50 en el array)
 app.get('/middle', (req, res) => {
    res.json(books.at(50));
 });

 //5.Crea una ruta /author/dante-alighieri para obtener SÓLO EL TÍTULO 
 //del libro de Dante Alighieri
 app.get('/author/dante-alighieri', (req, res) => {
    res.json(books.find(book => book.author == 'Dante Alighieri').title);
 });

 //6.Crea una ruta /country/charles-dickens para obtener SÓLO EL PAÍS 
 //del libro de Charles Dickens
 app.get('/country/charles-dickens', (req, res) => {
    res.json(books.find(book => book.author == 'Charles Dickens').country);
 });

 //7.Crea una ruta /year&pages/cervantes para obtener LAS PÁGINAS Y EL AÑO
 //del libro de Miguel de Cervantes, Ejemplo de respuesta: { pages: ..., year: ... }
 app.get('/year&pages/cervantes', (req, res) => {
    const book = books.find(book => book.author == 'Miguel de Cervantes');
    const {year, pages} = book;
    res.json({year, pages});
 });

//8.Crea una ruta /country/count/spain para obtener EL NÚMERO DE LIBROS de España
app.get('/country/count/spain', (req, res) => {
    res.json(books.filter(book => book.country == 'Spain').length);
 });

//9.Crea una ruta /country/at-least/germany para obtener VERDADERO O FALSO 
//dependiendo de si hay o no un libro de Alemania
app.get('/country/at-least/germany', (req, res) => {
    res.json(books.some(book => book.country == 'Germany'));
 });

//10.Crea una ruta /pages/all-greater/200 para obtener VERDADERO O FALSO 
//dependiendo de si todos los libros tienen más de 200 páginas
app.get('/pages/all-greater/200', (req, res) => {
    res.json(books.every(book => book.pages > 200));
 });


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  });
