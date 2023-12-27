function findIndicesWithSum(target, numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      return [left, right]; // Found the indices and return them
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return "No such pair found";
}

// Example usage:
const targetNumber = 11;
const sortedNumbers = [2, 4, 5, 7, 9, 11, 13];

const result = findIndicesWithSum(targetNumber, sortedNumbers);
console.log(result);
