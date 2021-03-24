export const initialState = {
  posts: {
    data: [
      // { id: 1, title: 'Ogłoszenie pierwsze', price: '120', status: 'published', description: 'To jest ogłoszenie testowe.', email: 'johnDoe@gmail.com', phone: '123 111 666', photo: '', localization: '', publication: '', lastEdit: '' },
      // { id: 2, title: 'Ogłoszenie drugie', price: '120', status: 'published', description: 'To jest ogłoszenie testowe.', email: '', phone: '666 222 666', photo: '', localization: '', publication: '', lastEdit: '' },
      // { id: 3, title: 'Ogłoszenie trzecie', price: '120', status: 'closed', description: 'To jest ogłoszenie testowe.', email: '', phone: '666 333 666', photo: '', localization: '', publication: '', lastEdit: '' },
      // { id: 4, title: 'Ogłoszenie takie se', price: '120', status: '', description: 'To jest ogłoszenie testowe.', email: '', phone: '666 444 666', photo: '', localization: '', publication: '', lastEdit: '' },
    ],

    userData: [
      { id: 1, title: 'Ogłoszenie użytkownika', price: '120', status: 'draft', description: 'To jest ogłoszenie testowe.', email: 'johnDoe@gmail.com', phone: '123 111 666', photo: '', localization: '', publication: '', lastEdit: '' },
    ],

    login: 'true',

    loading: {
      active: false,
      error: false,
    },
  },
};