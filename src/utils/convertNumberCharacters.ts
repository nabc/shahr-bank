export default function convertNumberCharacters(
  value: string | number,
  convertTo: 'fa' | 'en'
) {
  if (value === null) {
    return '-';
  }

  if (convertTo === 'fa') {
    return value.toString().replace(/[1234567890١٢٣٤٥٦٧٨٩٠]/gi, (e) => {
      const c = e.charCodeAt(0);
      return String.fromCharCode(c + (c < 60 ? 1728 : 144));
    });
  }
  return value.toString().replace(/[۱۲۳۴۵۶۷۸۹۰١٢٣٤٥٦٧٨٩٠]/gi, (e) => {
    const c = e.charCodeAt(0);
    return String.fromCharCode(c - (c < 1770 ? 1584 : 1728));
  });
}
