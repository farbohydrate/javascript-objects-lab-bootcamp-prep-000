var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var test = Object.assign(object, {key: value});
  return test;
}