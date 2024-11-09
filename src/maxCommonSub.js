/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a DP table to store lengths of longest common suffixes
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  let maxLen = 0; // Length of the longest common substring
  let maxEndPos = 0; // End position of the longest common substring in str1

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; // Extend the common substring
        if (dp[i][j] > maxLen) {
          maxLen = dp[i][j];
          maxEndPos = i; // End position of the substring in str1
        }
      } else {
        dp[i][j] = 0; // No common substring ends here
      }
    }
  }

  // If no common substring is found
  if (maxLen === 0) return '';

  // Extract and return the longest common substring from str1
  return str1.slice(maxEndPos - maxLen, maxEndPos);
};
