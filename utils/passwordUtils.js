const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*_-+=';

export const generatePassword = ({ length = 6, options }) => {
    const { upperCase, lowerCase, numbers, symbols } = options;
  
    const characterPool = [];
  
    if (upperCase) characterPool.push(...UPPERCASE_LETTERS);
    if (lowerCase) characterPool.push(...LOWERCASE_LETTERS);
    if (numbers) characterPool.push(...NUMBERS);
    if (symbols) characterPool.push(...SYMBOLS);
  
    return Array.from({ length }, () => characterPool[Math.floor(Math.random() * characterPool.length)]).join('');
  };
  
  export const measureStrength = ({ length, options }) => {
    const { upperCase, lowerCase, numbers, symbols } = options;
  
    const numberOfChecked = (Number(upperCase) + Number(lowerCase) + Number(numbers) + Number(symbols));
  
    if (length <= 5 || numberOfChecked === 0) return 0;
    if (length < 6 || numberOfChecked === 1) return 1;
    if (length < 12 && numberOfChecked <= 2) return 2;
    if ((length < 12 && numberOfChecked > 2) || (length >= 12 && numberOfChecked <= 2)) return 3;
    if (length >= 12 && numberOfChecked > 2) return 4;
  
    return 0;
  };