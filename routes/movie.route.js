import express from 'express';

import * as movieController from '../controllers/movie.controller.js';

const movieRouter = express.Router();

// create a movie 
movieRouter.post('/movie', movieController.createAMovie);

// get all movies
movieRouter.get('/movie', movieController.getAllMovies);

// get movie by id
movieRouter.get('/movie/:movieId', movieController.getMovieByMovieId);

// update movie by id 
movieRouter.patch('/movie/:movieId', movieController.updateMovieById);

// delete movie by id
movieRouter.delete('/movie/:movieId', movieController.deleteMovieById);


export default movieRouter;

