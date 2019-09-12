import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchPhoto = (pageNumber = 1, inputSearch = 'cat') => {
  const key = `$key=${process.env.REACT_APP_PIXABAY_API_KEY}`;
  const setting = '?image_type=photo&orientation=horizontal';
  const perPage = '&per_page=12';
  const page = `&page=${pageNumber}`;
  const search = `&q=${inputSearch}`;

  return axios.get(setting + perPage + key + page + search);
};

export default fetchPhoto;

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
