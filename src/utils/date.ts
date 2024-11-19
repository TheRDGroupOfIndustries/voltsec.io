// utils.js
import { format } from 'date-fns';

export function formatTimestamp(timestamp:string, formatString = 'yyyy-MM-dd HH:mm:ss') {
  return format(new Date(timestamp), formatString);
}
