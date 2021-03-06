/*
 * @Author: your name
 * @Date: 2021-10-09 14:24:29
 * @LastEditTime: 2021-10-20 09:45:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /算法/二叉树查找/非递归法.js
 */
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype = {
  show() {
    return this.data;
  },
};

function BST() {
  this.root = null;
}
BST.prototype = {
  insert(data) {
    let node = new Node(data, null, null);
    if (this.root == null) {
      // root 节点永远不被替换，替换的是left和right
      this.root = node;
    } else {
      //  获取root节点
      let currentNode = this.root;
      let parentNode;
      while (true) {
        //记录父节点
        parentNode = currentNode;
        if (data < currentNode.data) {
          // 替换当前节点，
          currentNode = currentNode.left;
          //如果左边是空则插入左边
          if (currentNode == null) {
            parentNode.left = node;
            break;
          }
        } else {
          // 替换当前节点，
          currentNode = currentNode.right;
          //如果右边是空则插入左边
          if (currentNode == null) {
            parentNode.right = node;
            break;
          }
        }
      }
    }
  },
  //中序遍历的代码如下：
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  },
  //先序遍历的代码如下：
  perOrder(node) {
    if (node) {
      console.log(node.show());
      this.perOrder(node.left);
      this.perOrder(node.right);
    }
  },
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  },
  // 查找最小值
  getMin(node) {
    let currentNode = node || this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  },
  // 查找最大值
  getMax(node) {
    let currentNode = node || this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  },
  // 查询节点
  find(data, node) {
    let currentNode = node || this.root;
    while (currentNode) {
      if (currentNode.data == data) {
        break;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  },
  // 递归删除
  deleteNode(node, data) {
    if (!node) {
      console.log("删除失败");
      return node;
    }

    if (node.data > data) {
      //若当前结点值大于删除值，则继续在左子树中寻找删除值
      node.left = this.deleteNode(node.left, data);
    } else if (node.data < data) {
      //若当前结点值小于删除值，则继续在右子树中寻找删除值
      node.right = this.deleteNode(node.right, data);
    } else {
      //找到与删除中相等的结点 没有任何子节点的情况
      if ((node.left === null) & (node.right === null)) {
        //叶子结点
        node = null;
      } else if (node.left === null) {
        //只有右子树
        node = node.right;
      } else if (node.right === null) {
        //只有左子树
        node = node.left;
      } else {
        //同时具有左右子树
        //如果待删除节点包含两个子节点， 正确的做法有两种：要么查找待删除节点左子树 上的最大值， 要么查找其右子树上的最小值
        // 查找左边最大值
        let prevNodeData = this.getMax(node.left);
        node.data = prevNodeData; //替换值
        node.left = this.deleteNode(node.left, prevNodeData); //递归左子树，删除重复值的结点
      }
    }
    return node;
  },
};

let bst = new BST();

var nums = [8, 4, 2, 7, 87, 23, 56, 21, 100, 90, 95, 110, 88, 89];
for (var i = 0; i < nums.length; i++) {
  bst.insert(nums[i]);
}

console.log("bst1=", bst);
console.log(bst.deleteNode(bst.root, 4));
console.log("bst2=", bst);
