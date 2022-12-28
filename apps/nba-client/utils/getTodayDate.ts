import dayjs from 'dayjs';

export const getTodayDate = (format = 'YYYY-MM-DD') => dayjs().format(format);
