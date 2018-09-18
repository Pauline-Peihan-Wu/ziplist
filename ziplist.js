
const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(testList1, testList2));