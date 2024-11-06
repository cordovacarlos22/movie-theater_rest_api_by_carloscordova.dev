const express = require('express');
import * as movieController from '../controllers/movie.controller.js';

const movieRouter = express.Router();

// create a movie 
movieRouter.post('/movie', movieController.createAMovie);

// get all movies
movieRouter.get('/movie', movieController.getAllMovies);

// get movie by id
movieRouter.get('/movie/:id', movieController.getMovieByMovieId);

// update movie by id 
movieRouter.patch('/movie/:id', movieController.updateMovieById);

// delete movie by id
movieController.delete('/movie/:id', movieController.deleteMovieById);


export default movieRouter;

