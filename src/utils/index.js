import moment from 'moment';
import { DailyPriceText } from '../constants/strings';

export function formatWeekDays(data = []) {
  const weekDays = [];
  for (let index = 0, daySum = 0; index < 7; index++, daySum++) {
    const day = moment().add(daySum, 'days');
    const isoWeekDay = day.isoWeekday();
    if (isoWeekDay !== 7 && isoWeekDay !== 6) {
      const dayS = day.format('dd');
      const date = day.date();
      const month = day.format('MM');
      const precio = data.length > 0 ? data.shift() : '0';
      weekDays.push({ dia: `${dayS} ${date} de ${month}`, precio }); 
    }
  }
  return weekDays;
}

export const currencyFormatter = new Intl.NumberFormat('es-MX', { currency: 'MXN', style: 'currency' });

export function getPriceDay() {
  const isoWeekDay = moment().isoWeekday();
  switch (isoWeekDay) {
    case 6:
    case 7:
      return `${DailyPriceText} el próximo lunes`;
    default:
      return `${DailyPriceText} el día de hoy`;
  }
}