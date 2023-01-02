import { displayGameBehind } from '../ConferenceStandingsTable.utils';

describe('displayGameBehind', () => {
  it('should return - if game behind is 0', () => {
    expect(displayGameBehind('0')).toEqual('-');
  });

  it('should return gameBehind if gameBehind is not 0', () => {
    expect(displayGameBehind('2.5')).toEqual('2.5');
  });
});
