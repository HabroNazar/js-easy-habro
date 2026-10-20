// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  let n_str="";
  for(let i=0;i<str.length;i++){
    if(str[i].toLowerCase()==='a'||str[i].toLowerCase()==='e'||str[i].toLowerCase()==='i'||str[i].toLowerCase()==='o'||str[i].toLowerCase()==='u'||str[i].toLowerCase()==='y'){
      n_str+='*';
    }
    else{
      n_str+=str[i];
    }
  }
  return n_str;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;