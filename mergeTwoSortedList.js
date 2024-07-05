//Dadas dos listas de números enteros nums1 y nums2, cada una ordenada en orden ascendente,
//y dos enteros m y n, que representan la cantidad de elementos en nums1 y nums2 respectivamente.

//Combinar nums1 y nums2 en un único array ordenado de forma ascendente.

//Para ello, nums1 tiene una longitud de m + n, donde los primeros m elementos denotan
//los elementos que deben ser combinados, y los últimos n elementos son 0 y deben ser ignorados."

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;

function merge(nums1, nums2, m, n) {
  let mergeIndex = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;

  outerLoop: for (let i = mergeIndex; i >= m; i--) {
    console.log("out", i);
    innerLoop: for (let j = p1; i >= 0; i--) {
      console.log(nums1);
      if (nums1[j] < nums2[p2]) {
        nums1[mergeIndex] = nums2[p2];
        console.log(p2);
        p2 = p2 - 1;
        mergeIndex = mergeIndex - 1;
        continue outerLoop;
      } else {
        nums1[mergeIndex] = nums1[j];
        mergeIndex = mergeIndex - 1;
        continue outerLoop;
      }
    }
  }
  return nums1;
}

console.log(merge(nums1, nums2, m, n));
