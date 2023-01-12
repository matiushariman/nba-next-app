import { convertESTtoLocalTime } from '../convertESTtoLocalTime';

describe('convertESTtoLocalTime', () => {
  it("should return est time in local time (UTC since it's server)", () => {
    expect(convertESTtoLocalTime('2022-12-25T12:00')).toEqual(
      new Date('2022-12-25T17:00:00.000Z')
    );
  });
});
