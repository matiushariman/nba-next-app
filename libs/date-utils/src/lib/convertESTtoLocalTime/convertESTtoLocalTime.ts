import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

export const convertESTtoLocalTime = (ESTTime: Date | string | dayjs.Dayjs) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return dayjs.tz(ESTTime, 'America/New_York').toDate();
};
