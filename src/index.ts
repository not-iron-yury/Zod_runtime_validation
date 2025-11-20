import { groupByAgeRange } from './services/groupByAgeRange';

const data = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 24 },
  { name: 'Charlie', age: 31 },
  { name: 'Dave', age: 40 },
  { name: 'Eve', age: 15 },
  //{ name: 'Charlie', age: 31, email: 'test@test.com' }, // должно упасть
];

try {
  const result = groupByAgeRange(data);
  console.log(JSON.stringify(result, null, 2)); // приводим к JSON-строке для вывода в console.log
} catch (err) {
  console.error('Ошибка:', err);
}
