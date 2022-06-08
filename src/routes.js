const {
  addBooksDiviner,
  getAllBooksDiviner,
  getBookByIdDiviner,
  editBookByIdDiviner,
  deleteBookByIdDiviner,
} = require('./diviner');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksDiviner,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksDiviner,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdDiviner,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdDiviner,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdDiviner,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
