const nomes = ['maria', 'joão','eduardo', 'grabriel','júlia'];

//splice(index, delete, elemn1, eleme2)
const removidos = nomes.splice(0, 0, 'Luiza');
console.log(nomes, removidos);

const nums1 = [1,2,3];
const nums2 = [4,5,6];
const spread =[...nums1 , ...nums2 , ...[7,8,9], 'arraysSpread', 121]
const a3 = nums1.concat(nums2 , ... [7, 8,9], 'luiz', true, 457);
console.log(spread);
console.log(a3);

