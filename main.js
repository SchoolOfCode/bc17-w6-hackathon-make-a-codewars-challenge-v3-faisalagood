//  * Hello challenger! Your task is to complete a function named `passwordStrength` 
//  * which takes in a password (a string) and you return back a number of how strong that
//  * password is!
//  * 
//  * Your implementation should handle password strings for the following levels:
//  *
//  * Password Strength Level 1: Very Weak
//  * Requirements: Any combination of characters.
//  * Example: "password"
//  * Explanation: This is the weakest type of password as it's commonly used and easily guessed.
//  *
//  * Password Strength Level 2: Weak
//  * Requirements: At least one number.
//  * Example: "password123"
//  * Explanation: Adding a number increases the password's complexity slightly but is still relatively easy to guess, especially if the number is predictable (e.g., birth year).
//  * 
//  * Password Strength Level 3: Medium
//  * Requirements: At least one uppercase letter, one lowercase letter, and one number.
//  * Example: "Password123"
//  * Explanation: This level of complexity improves security but is still susceptible to dictionary attacks and brute-force attacks, especially if the password is short.
//  * 
//  * Password Strength Level 4: Strong
//  * Requirements: At least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*).
//  * Example: "Password123!"
//  * Explanation: Incorporating a special character significantly enhances password strength, making it harder to crack.
//  * 
//  * Password Strength Level 5: Very Strong
//  * Requirements: At least 12 characters, a combination of uppercase and lowercase letters, numbers, and special characters.
//  * Example: "!P@ssw0rd12!"
//  * Explanation: A long, complex password with random characters is the most secure option.
//  *
//  * Bonus Task!
//  * 
//  * Password Strength Level 0: TERRIBLE!
//  * Requirements: A bad common password, in any case, even if it includes uppercase and lowercase letters, numbers, and special characters.
//  * Example: "Password123&!"
//  * Explanation: There is a dictionary of common bad passwords used by hackers online. Reject them by returning 0.
//  * 
//  * Good luck!
//  *

const hasSpecialCharacter = (str) => {
  const specialCharactersRegex = /[!@#$%^&*()\-_\+={[\]}|:;'\",<.>/]/gi;
  return specialCharactersRegex.test(str);
};

const commonBadPasswords = [
  "password",
  "123456",
  "qwerty",
  "123456789",
  "12345",
  "111111",
  "iloveyou",
  "princess",
  "admin",
  "welcome",
  "666666",
  "abc123",
  "football",
  "123123",
  "monkey",
  "654321"
];

export function passwordStrength(password) {
  let level = 0;

  let hasBadPassword = commonBadPasswords.some((badPassword) => {
    if (password.includes(badPassword)) return true;
  })

  console.log(hasBadPassword)

  if (hasBadPassword) {
    return;
  }

  if (typeof password === 'string') {
    level += 1; // For being a string  
  }
  

  if (/\d/.test(password)) {
    level += 1; // For containing a number
  }

  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    level += 1; // For containing both upper and lowercase letters
  }

  if (hasSpecialCharacter(password)) {
    level += 1; // For containing a special character
  }

  if (password.length >= 12) {
    level += 1; // For being at least 12 characters long
  }

  return level;
}