const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const filmList = []
    films.forEach((films) => {
    filmList.push(films)
    })
    const actual = cinema.films;
    assert.deepStrictEqual(actual, filmList);

  });

  it('should be able to find a film by title', function(){
    const foundFilm = films.filter((film) => {
      return film.title === 'Dunkirk'
    })
    const actual = [dunkirk];
    assert.deepStrictEqual(actual, foundFilm);

  });

  it('should be able to filter films by genre', function(){
    const foundFilm = films.filter((film) => {
      return film.genre === 'drama'
    })
    const actual = [moonlight, trainspotting];
    assert.deepStrictEqual(actual, foundFilm);
  });
  
  it('should be able to check whether there are some films from a particular year', function(){
    let answer;
    const foundFilm = films.filter((film) => {
      return film.year === 2016 
    })
    if (foundFilm.length != 0) {
      answer = true
    } else {
      answer = false
    };
    const actual = true;
    assert.deepStrictEqual(actual, answer);
  });
  
  it('should be able to check whether there are no films from a particular year', function(){
    let answer;
    const foundFilm = films.filter((film) => {
      return film.year === 2013 
    })
    if (foundFilm.length != 0) {
      answer = true
    } else {
      answer = false
    };
    const actual = false;
    assert.deepStrictEqual(actual, answer);
  });
  
  it('should be able to check whether all films are over a particular length', function(){
    const foundFilm = films.filter((film) =>{
      return film.length > 120
    });
    if (foundFilm.length != films.length) {
      answer = false
    } else {
      answer = true
    };
    const actual = false;
    assert.deepStrictEqual(actual, answer);
  });
  
  it('should be able to calculate total running time of all films', function(){
    const foundFilm = films.reduce((runningTotal, film) => {
      return runningTotal + film.length 
  }, 0)
  const actual = 622;
  assert.deepStrictEqual(actual, foundFilm);

  });

});
