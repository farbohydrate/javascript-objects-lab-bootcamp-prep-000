var recipes = {
  eggs: "4"
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, { key: value });
  return newObj;
}