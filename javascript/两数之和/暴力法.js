/*
 * @Author: your name
 * @Date: 2021-10-08 14:51:17
 * @LastEditTime: 2021-10-09 14:28:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/两数之和/暴力法.js
 */
 
/*
        1. 两数之和
        给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

        你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

        你可以按任意顺序返回答案。

        

        示例 1：

        输入：nums = [2,7,11,15], target = 9
        输出：[0,1]
        解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
        示例 2：

        输入：nums = [3,2,4], target = 6
        输出：[1,2]
        示例 3：

        输入：nums = [3,3], target = 6
        输出：[0,1]
        

        提示：

        2 <= nums.length <= 104
        -109 <= nums[i] <= 109
        -109 <= target <= 109
        只会存在一个有效答案
        进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？




 1. 读题
分析
这是一道简单题，所以 AC 并不是问题。重要的是通过简单题训练解题思路。

从数组中寻找目标值，可能会想到二分法，但是这里的整数数组并没有明确说是有序的。没有骚思路一律先暴力冲一下。

2. 解题
2.1 暴力一下
如果没有什么好的思路，最简单直接的办法就是代入一下，看看自己如何解这个问题。最直观的想法就是拿一个数，看看后面有没有符合要求的目标值。

 其实在暴力解法里就做了一点小优化：当寻找第二个值的时候，我们不是从头开始找，而是从外层循环 i 之后找。它隐含的意思就是，如果 i 之前的元素能够匹配，那么外层到不了 i 就结束了。

但这种优化影响不了该解法为 O(n^2) 时间复杂度的本质。

 
   */
      var twoSum = function (nums, target) {
        let item;
        for (let i = 0; i < nums.length; i++) {
          item = nums[i];
          for (let j = i + 1; j < nums.length; j++) {
            if (target == item + nums[j]) {
              return [i, j];
            }
          }
        }
      };
 