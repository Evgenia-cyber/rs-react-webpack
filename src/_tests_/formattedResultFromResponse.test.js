import mockDataFromNewsapi from '../../__mocks__/mockDataFromNewsapi';
import mockFormattedData from '../../__mocks__/mockFormattedData';
import { formattedDate, formattedDescription, formattedResponse } from '../utils/formattedResultFromResponse';

describe('formattedDescription function testing', () => {
  it('should return text with no more than 103 characters', () => {
    // eslint-disable-next-line max-len
    const formattedText = formattedDescription(
      'This quarter was supposed to be when computer chip supply and auto production were returning to auto…'
    );

    expect(formattedText.length).toBeLessThanOrEqual(103);
  });
});

describe('formattedDate function testing', () => {
  it('should return formatted published date', () => {
    const formattedPublishedDate = formattedDate('2021-08-23T11:17:00Z');

    expect(formattedPublishedDate).toBe('Mon, 23 Aug 2021');
  });
});

describe('formattedResponse function testing', () => {
  it('should return formatted articles for cards', () => {
    const formattedArticles = formattedResponse(mockDataFromNewsapi);

    expect(formattedArticles).toEqual(mockFormattedData);
  });
});
