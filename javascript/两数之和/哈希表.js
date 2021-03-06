/*
 * @Author: your name
 * @Date: 2021-10-08 14:55:18
 * @LastEditTime: 2021-10-09 14:28:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/两数之和/哈希表.js
 */
 
      /*
     2.2 哈希表
    可以看到暴力解法在空间复杂度上还是很有优势的，因为它基本不使用外部内存。

    优化的常见思路是用空间换时间。

    我们暴力解法中，第二层循环的目的是找到和 i 匹配的元素，由于数组不是有序的，我们不得不一个个遍历。而借助外部内存，我们就可以把该过程缩减为 O(1) 复杂度，那就是哈希表。
   s 由于使用了外部内存，内存复杂度变为 O(n)，时间复杂度则降至 O(n)；

     */
      const twoSum = function (nums, target) {
        const len = nums.length;

        // 使用哈希表存储当前值
        const map = new Map();
        for (let i = 0; i < len; i++) {
          map.set(nums[i], i);
        }
        console.log("map=", map);
        for (let i = 0; i < len; i++) {
          const needNum = target - nums[i];
          if (map.has(needNum) && i !== map.get(needNum)) {
            return [i, map.get(needNum)];
          }
        }
      };

      console.log(twoSum([1, 2, 3, 5, 34, 5], 10));
 