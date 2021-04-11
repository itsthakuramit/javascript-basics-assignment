/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (num) => {
	// Write your code here

        let pyramid = '';

        for(let i=0; i<num; i++) {
              for(let j=0; j<num-i; j++) {
                pyramid += ' ';
              }
              for(let k=0; k<=i; k++) {
                pyramid += '* ';
              }
              pyramid += ' \n';
          }
        return pyramid;
      };
     
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
