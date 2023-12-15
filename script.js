function mincost(arr)
{ 
//write your code here
// return the min cost
  if (arr.length === 0) return 0;

  // Sort the array in ascending order initially
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    // Find the two shortest ropes
    const first = arr.shift();
    const second = arr.shift();

    // Merge the two ropes and add the cost
    const sum = first + second;
    cost += sum;

    // Add the merged rope back to the array
    arr.push(sum);

    // Resort the array after adding the new rope
    arr.sort((a, b) => a - b);
  }

  return cost;
}

module.exports=mincost;