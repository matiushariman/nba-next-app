import { displayLiveGameStatusText } from '../displayLiveGameStatusText';

describe(displayLiveGameStatusText, () => {
  it('should return description if periodClock is empty', () => {
    expect(displayLiveGameStatusText('2', '', 'HALF TIME')).toEqual(
      'HALF TIME'
    );
  });

  it('should return Q with periodClock if periodClock is not empty and period <= 4', () => {
    expect(displayLiveGameStatusText('2', '12:00', '')).toEqual('Q2 12:00');
  });

  it('should return OT with periodClock if periodClock is not empty and period > 4', () => {
    expect(displayLiveGameStatusText('5', '12:00', '')).toEqual('OT1 12:00');
  });
});
