function getIndex(char, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++){
      if (bracketsConfig[i][0] == char || bracketsConfig[i][1] == char) return i;    
  }
}
module.exports = function check(str, bracketsConfig) {
  let stack = [];
  if (str.length%2 != 0 || (str[0] == bracketsConfig[getIndex(str[0], bracketsConfig)][1] && bracketsConfig[getIndex(str[0], bracketsConfig)][1] != bracketsConfig[getIndex(str[0], bracketsConfig)][0])) return false;
  
  for (let i = 0; i < str.length; i++){
    let a = getIndex(str[i], bracketsConfig);
    if (stack.at(-1) == bracketsConfig[a][0] && bracketsConfig[a][1] == bracketsConfig[a][0]) stack.pop();
    else if (str[i] == bracketsConfig[a][0]) stack.push(str[i]);
    else if (stack.at(-1) != bracketsConfig[a][0]) return false;
    else {
      stack.pop();
    }
    
  }
  if (stack.length == 0) return true;
  return false;
}