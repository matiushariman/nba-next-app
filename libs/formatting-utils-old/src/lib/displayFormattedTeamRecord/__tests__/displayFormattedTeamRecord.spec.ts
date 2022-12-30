import { displayFormattedTeamRecord } from '../displayFormattedTeamRecord';

describe(displayFormattedTeamRecord, () => {
  it('should return formatted team record', () => {
    expect(displayFormattedTeamRecord(32, 12)).toEqual('32 - 12');
  });
});
