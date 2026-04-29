import getFetchData from './getFetchData';

describe('Fetch Data API, response is ok', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return data', async () => {
    const mockData = {
      name: 'John',
      age: 20,
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockData,
    });

    const data = await getFetchData<typeof mockData>('https://fake.url');
    expect(data).toEqual(mockData);
  });
});

describe('Fetch Data API, bad response', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return throw error', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    expect(getFetchData('https://fake.url')).rejects.toThrow('HTTP error: 500');
  });
});
