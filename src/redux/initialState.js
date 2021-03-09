export const initialState = {
  posts: {
    data: {
      announcements: [
        { id: 1, title: 'Ogłoszenie pierwsze', price: '120', status: 'draft', description: 'To jest ogłoszenie testowe.', email: '', phone: '666 666 666', photo: '', localization: '', publication: '', lastEdit: '' },
        { id: 2, title: 'Ogłoszenie drugie', price: '120', status: 'public', description: 'To jest ogłoszenie testowe.', email: '', phone: '666 666 666', photo: '', localization: '', publication: '', lastEdit: '' },
        { id: 3, title: 'Ogłoszenie trzecie', price: '120', status: 'closed', description: 'To jest ogłoszenie testowe.', email: '', phone: '666 666 666', photo: '', localization: '', publication: '', lastEdit: '' },
        { id: 4, title: 'Ogłoszenie czwarte', price: '120', status: '', description: 'To jest ogłoszenie testowe.', email: '', phone: '666 666 666', photo: '', localization: '', publication: '', lastEdit: '' },
      ],
    },
    loading: {
      active: false,
      error: false,
    },
  },
};
