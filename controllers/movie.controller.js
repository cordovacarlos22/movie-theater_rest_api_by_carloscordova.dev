import Movie from '../modules/movie.model.js'

// crud operations 

// create a movie 
const createAMovie = async (req, res) => {

  // validate movie data from request body 
  const {
    title,
    director,
    release_date,
    rate,
    duration,
    genre,
    description,
    price,
    available_seats,
    is_available,
    image_url
  } = req.body;

  if (!title || !director || !release_date || !rate || !duration || !genre || !description || !price || !available_seats || !is_available || !image_url) {
    return res.status(400).json({ message: 'All fields are required' });
  };

  // validate if movie already exists
  const movieExists = await Movie.findOne({ title });
  if (movieExists) {
    return res.status(400).json({ message: 'Movie already exists' });
  }

  // valida image url is an array 
  if (!Array.isArray(image_url) || image_url.length === 0) {
    return res.status(400).json({ message: 'image_url must be an array and not empty' });
  }


  // create new movie
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch {
    res.status(400).json({ message: 'Failed to create movie', error: error });
  }
};

// get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ is_available: true });
    if (!movies) return res.status(404).json({ message: 'Not Movies Found' });
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ message: 'Failed to get movies', error: error });
  }
};
// get movie by id 
const getMovieByMovieId = async (req, res) => {
  // Valido que el ID sea un ObjectID de MongoDB (24 caracteres alfanuméricos en hexadecimal)
  if (!req.params.movieId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'Invalid Movie ID' })
  }

  try {
    const movie = await Movie.find({ _id: req.params.movieId, is_available: true });
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(movie);

  } catch (error) {
    res.status(404).json({ message: 'Failed to get movie by id', error: error });
  }
}

// update movie 

const updateMovieById = async (req, res) => {
  try {

  } catch (error) {

  }
};

const deleteMovieById = async (req, res) => {
  try {

  } catch (error) {

  }
};





export {
  createAMovie,
  getAllMovies,
  getMovieByMovieId,
  updateMovieById,
  deleteMovieById
}
