import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const getLocalTime = (dateTimeEt: string) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return dayjs.tz(dateTimeEt, 'America/New_York').toDate();
};
