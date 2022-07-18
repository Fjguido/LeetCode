/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, oldColor = -1, visited) {
     // Check the boundary condition
    if(sr<0 || sr>=image.length) return image;
    if(sc<0 || sc>=image[sr].length) return image;
	
    // initialize the oldcolor of one with first cell presented
    if(oldColor === -1) oldColor = image[sr][sc];
	
    // We keep track of visited node in this newly created 2D array
    if(!visited) visited = initialize2DArray(image.length, image[sr].length, false)
	
    // if color of the cell is not equal to cell we visited or we have already visited
    // then we don't process the cell, this is done to prevent the recursive call
    // and prevent flooding to wrong cell
    if(oldColor !== image[sr][sc] || visited[sr][sc]) return image;
	
    // If all the above criteria is met then we are good to flood this cell with new color
    image[sr][sc] = newColor;
	
    // We mark this cell as visited
    visited[sr][sc] = true;
	
    // We traverse to all 4 direction., i.e., North, West, East and South respectively in the below 4 step
    floodFill(image, sr-1, sc, newColor, oldColor, visited);
    floodFill(image, sr, sc-1, newColor, oldColor, visited);
    floodFill(image, sr, sc+1, newColor, oldColor, visited);
    floodFill(image, sr+1, sc, newColor, oldColor, visited);
	
    // finally we have the image with flooded value
    return image;
};

/**
 * Helper function to create 2D array, used for visited node
 */
function initialize2DArray(m, n, val) {
    return new Array(m).fill(0).map(() => new Array(n).fill(val));

};