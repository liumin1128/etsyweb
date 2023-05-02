import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

export const getTimeAgo = (str: number) => {
  return `${dayjs(str).toNow(true)}前`;
};
