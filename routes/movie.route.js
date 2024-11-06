const express = require('express');
import * as movieController from '../controllers/movie.controller.js';

const movieRouter = express.Router();

// create a movie 
movieRouter.post('/', movieController.createAMovie);

// get all movies
movieRouter.get('/', movieController.getAllMovies);

// get movie by id
movieRouter.get('/:id', movieController.getMovieByMovieId);

// update movie by id 
movieRouter.patch('/:id', movieController.updateMovieById);

// delete movie by id
movieController.delete('/:id', movieController.deleteMovieById);


export default movieRouter;

