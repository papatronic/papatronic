import moment from 'moment-timezone';

export function formatWeekDays(data = []) {
  const weekDays = [];
  for (let index = 0, daySum = 0; index < 7; index++, daySum++) {
    const day = moment().add(daySum, 'days');
    const isoWeekDay = day.isoWeekday();
    if (isoWeekDay !== 7 && isoWeekDay !== 6) {
      const dayS = day.format('dd');
      const date = day.date();
      const month = day.format('MM');
      const precio = data.shift();
      weekDays.push({ dia: `${dayS} ${date} de ${month}`, precio }); 
    }
  }
  return weekDays;
}

export const currencyFormatter = new Intl.NumberFormat('es-MX', { currency: 'MXN', style: 'currency' });

