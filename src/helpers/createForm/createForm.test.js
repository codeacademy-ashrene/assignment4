import createForm from '.';

const axios = require('axios');

describe('the createForm function', () => {
  const mockForms = {
    formid: '4353453',
    formname: 'jhbhjbhbhjb',
    fieldsandresponses: {
      f1: [
        'response1,response2,response4',
      ],
      f2: [
        'response1,response2,response4',
      ],
    },
  };
  let getMock;
  beforeAll(() => {
    getMock = jest.spyOn(axios, 'post');
    getMock.mockImplementation(() => mockForms);
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should return an object', async () => {
    const Forms = await createForm();
    expect(Forms instanceof Object).toBe(true);
  });

  it('should return the mock Forms', async () => {
    const Forms = await createForm();
    expect(Forms).toEqual(mockForms);
  });
});
