import { formatDate } from '../formatDate';

describe.concurrent('formatDate', () => {
  it('should return formatted date in default template format', () => {
    expect(formatDate('2019-01-25')).toEqual('2019-01-25');
  });

  it('should return formatted date in custom template format', () => {
    expect(formatDate('2019-01-25', 'DD/MM/YYYY')).toEqual('25/01/2019');
  });
});
