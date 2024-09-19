

/**
 * Example array to be search.
 */
const arr = ['A',['B',[['C','D',['E','F'],'G'],['H','I',['J','K']],'L'],'M',['N',[['O','P'],'Q','R'],['S','T'],'U']],['V',['W','X']],'Y','Z'];

var vistedElement = [];

var sortedArr = [];



// DFS - Depth-First Search 

/**
 * Get all elements in the array.
 * @example
 * // >> ['A', 'B', 'C', 'D']
 * DFS_ArrayLike(['A',['B','C'],'D']);
 * @param {Array} obj - The array to be search.
 * @param {Boolean} log - Whether log results or not.
 * @return {Array} - All elements in the array, based on DFS.
*/
function DFS_ArrayLike(obj,log) {

    if ((Array.isArray(obj) != true) && (typeof(obj) != 'string')) {

        var err = new TypeError(`${Object.keys({obj})} is not an \'Array\'`);
        console.log(err);

    } else {

        log ? console.log(`DFS result: ${arr.toString()}`): null;
        return arr.toString();

    }

}

// BFS - Breadth-First Search


// Test
console.log(``);
DFS_ArrayLike(arr,1);