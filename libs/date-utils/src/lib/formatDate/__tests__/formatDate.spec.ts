import { formatDate } from '../formatDate';

describe(formatDate, () => {
  it('should return formatted date', () => {
    expect(formatDate('2019-01-25', 'DD/MM/YYYY')).toEqual('25/01/2019');
  });
});
