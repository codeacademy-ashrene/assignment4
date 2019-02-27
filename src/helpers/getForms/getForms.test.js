import getForms from '.';

const axios = require('axios');

describe('the getForms function', () => {
  const mockForms = {
    data: [
      {
        id: 1,
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
        createdAt: '2019-02-27T08:40:11.386Z',
        updatedAt: '2019-02-27T08:40:11.386Z',
      },
    ],
  };
  let getMock;
  beforeAll(() => {
    getMock = jest.spyOn(axios, 'get');
    getMock.mockImplementation(() => mockForms);
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should return an object', async () => {
    const Forms = await getForms();
    expect(Forms instanceof Object).toBe(true);
  });

  it('should return the mock Forms', async () => {
    const Forms = await getForms();
    expect(Forms).toEqual(mockForms);
  });
});
