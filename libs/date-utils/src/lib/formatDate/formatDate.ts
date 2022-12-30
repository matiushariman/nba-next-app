import dayjs from 'dayjs';

export const formatDate = (
  date: dayjs.Dayjs | Date | string | number | null,
  template = 'YYYY-MM-DD'
) => dayjs(date).format(template);
