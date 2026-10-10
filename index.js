const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Compares two arrays and returns true if they are strictly identical in length,
 * order, and values.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
function equals(arr1, arr2) {
  // 1. If lengths are different, they cannot be strictly identical
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 2. Compare elements at each index in order
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // 3. All elements matched in the exact same order
  return true;
}

// Helper to ask questions sequentially using Promises/async/await
const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  const input1 = await askQuestion('Enter list1: ');
  const input2 = await askQuestion('Enter list2: ');

  // Split input strings into arrays of strings using space as separator
  // .trim() removes any leading/trailing spaces, and filter removes empty entries from multiple spaces
  const list1 = input1.trim().split(/\s+/).filter(Boolean);
  const list2 = input2.trim().split(/\s+/).filter(Boolean);

  // Call comparison function
  const isIdentical = equals(list1, list2);

  // Output exact message based on the returned boolean
  if (isIdentical) {
    console.log('Two lists are strictly identical');
  } else {
    console.log('Two lists are not strictly identical');
  }

  rl.close();
}

main();