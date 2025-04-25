const dates = ['10-02-22', '11-12-23', '0-13-22', '41-12-23', '06-08-05', '32-10-15', '22-07-10'];

const validDates = dates.filter(d => {
  const parts = d.split('-');
  if (parts.length !== 3 || parts.some(part => part.length !== 2 || isNaN(part))) {
    return false;
  }
  const [day, month] = parts.map(Number);
  return month >= 1 && month <= 12 && day >= 1 && day <= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
});

console.log(validDates);
