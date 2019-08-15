
const fizzBuzz = (num) => {
  let resposta = '';
  if (num === 0) return num;
  if (num % 3 === 0) resposta += 'Fizz';
  if (num % 5 === 0) resposta += 'Buzz';
  if (resposta !== '') return resposta;
  return num;
};
export default fizzBuzz;
