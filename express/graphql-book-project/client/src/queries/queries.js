import { gql } from 'apollo-boost';

const getBooks = gql `
  {
    books {
      name
      id
    }
  }
`

const getBook = gql `
  query($id: ID){
    book(id: $id) {
      name
      genre
      id
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`

const getAuthors = gql `
  {
    authors {
      name
      id
    }
  }
`

const addBook = gql `
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

export { getBooks, getBook, getAuthors, addBook }