export function getAgeRange(age: number): string {
  if (age < 0) throw new Error('Некорректный возраст');

  if (age <= 17) return '0-17';
  if (age <= 25) return '18-25';
  if (age <= 35) return '26-35';
  if (age <= 50) return '36-50';
  return '50+';
}
