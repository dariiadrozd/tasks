// // На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// // пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// // буквы, символ, длина не менее 8 символов)

// // const pass = '121dasaASWQ@';

// // function checkPass(password) {
// //     let specSymbol;
// //     let upperCase;
// //     let includeNum;
// //     let includeLetter;
// //     let passLenght;
// //     password.includes('@') || password.includes('$') || password.includes('#')
// //         ? (specSymbol = true)
// //         : (specSymbol = false);

// //     for (let i = 0; i < password.length; i++) {
// //         if (password[i] == password[i].touppercase()) {
// //             upperCase = true;
// //             break;
// //         } else {
// //             upperCase = false;
// //         }
// //     }
// //     for (let i = 0; i < password.length; i++) {
// //         if (!isNaN(password[i])) {
// //             includeLetter = true;
// //             break;
// //         } else {
// //             includeLetter = false
// //         }
// //     }
// //     password.length >= 8 ? (passLenght = true) : (passLenght = false);
// //     return specSymbol == true &&
// //         upperCase == true &&
// //         includeNum == true &&
// //         includeLetter == true &&
// //         passLenght == true
// //         ? 'надежный пароль'
// //         : 'ненадежный пароль'
// // }

// // const result = checkPass(pass);
// // console.log(result);

// // На входе строка в виде пароля. Необходимо написать
// // функцию на проверку, что пароль является надежным
// // (содержит хотя бы 1 букву в большом регистре, числа,
// //     буквы, символ, длина не менее 8 символов)

// const pass = "121dasaASWQ@";

// function check(pass) {
//   let specSymbol;
//   let upperCase;
//   let includeNum;
//   let includeLetter;
//   let passLength;

//   pass.includes("@") || pass.includes("$") || pass.includes("#")
//     ? (specSymbol = true)
//     : (specSymbol = false);

//   for (let i = 0; i < pass.length; i++) {
//     if (pass[i] == pass[i].toUpperCase()) {
//       upperCase = true;
//       break;
//     } else {
//       upperCase = false;
//     }
//   }

//   for (let i = 0; i < pass.length; i++) {
//     if (!isNaN(pass[i])) {
//       includeNum = true;
//       break;
//     } else {
//       includeNum = false;
//     }
//   }

//   for (let i = 0; i < pass.length; i++) {
//     if (isNaN(pass[i])) {
//       includeLetter = true;
//       break;
//     } else {
//       includeLetter = false;
//     }
//   }

//   pass.length >= 8 ? (passLength = true) : (passLength = false);

//   return specSymbol == true &&
//     upperCase == true &&
//     includeNum == true &&
//     includeLetter == true &&
//     passLength == true
//     ? "надёжный пароль"
//     : "ненадёжный пароль";
// }

// let result = check(pass);
// console.log(result);



const pass = "121dasaAWQ@S";

function checkPass(passw) {
  let specSymbol;
  let upperCase;
  let includeNum;
  let includeLetter;
  let passLenght;

  passw.includes("@") || passw.includes("$") || passw.includes("#")
    ? (specSymbol = true)
    : (specSymbol = false);

  for (let i = 0; i < passw.length; i++) {
    if (passw[i] === passw[i].toUpperCase()) {
      upperCase = true;
      break;
    } else {
      upperCase = false;
    }
  }

  for (let i = 0; i < passw.length; i++) {
    if (!isNaN(passw[i])) {
      includeNum = true;
      break;
    } else {
      includeNum = false;
    }
  }

  for (let i = 0; i < passw.length; i++) {
    if (isNaN(passw[i])) {
      includeLetter = true;
      break;
    } else {
      includeLetter = false;
    }
  }

  passw.length >= 8 ? (passLenght = true) : (passLenght = false);

  return specSymbol == true &&
    upperCase == true &&
    includeNum == true &&
    includeLetter == true &&
    passLenght == true
    ? "Надежный пороль"
    : "Ненадежный пороль";
}

const result = checkPass(pass);
console.log(result);

