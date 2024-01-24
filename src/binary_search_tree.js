class Node {
    constructor (data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor (array){
        const sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b)
        console.log(sortedUniqueArray)

        const buildTree = (start, end) => {
            if (start > end){
                return null
            }

            const mid = Math.floor((start + end) / 2)
            const rootNode = new Node (sortedUniqueArray[mid])

            rootNode.left = buildTree(start, mid - 1)
            rootNode.right = buildTree(mid + 1, end)

            return rootNode
        }

        this.root = buildTree(0, sortedUniqueArray.length - 1)
    }
}

function insert (node, key){
    if (node === null){
        return new Node(key)
    }

    if (key < node.data){
        node.left = insert(node.left, key)
    } else if(key > node.data){
        node.right = insert(node.right, key)
    }

    return node
}

function deleteNode (root, k){
    if(root === null){
        return root
    }

    if (root.data > k){
        root.left = deleteNode(root.left, k)
        return root
    }
    else if (root.data < k){
        root.right = deleteNode(root.right, k)
        return root
    }

    if (root.left === null){
        let temp = root.right
        delete root
        return temp

    } else if (root.right === null){
        let temp = root.left
        delete root
        return temp

    }else{
        let sucParent = root

        let suc = root.right
        while (suc.left !== null){
            sucParent = suc
            suc = suc.left
        }
        if(sucParent !== root){
            sucParent.left = suc.right
        }else{
            sucParent.right = suc.right
        }

        root.data = suc.data

        delete suc
        return root
    }
}

function find (root, k){
    if(root === null){
        return root
    }

    if (root.key > k){
        root.left = find(root.left, k)
        return root
    }
    else if (root.key < k){
        root.right = deleteNode(root.right, k)
        return root
    }
}

function inOrderTraversal (node){
    if (node) {
        inOrderTraversal(node.left)
        console.log (node.data)
        inOrderTraversal(node.right)
    }
}

function levelOrder (root, callback){
    if(!root){
        return []
    }

    const result =[]
    const queue = [root]

    while(queue.length > 0){
        const currentNode = queue.shift()
        result.push(callback  ? callback(currentNode) : currentNode.data)

        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }

    return result
}

function inOrder (root, callback){
    let result = []

    function traverse (node){
        if(node){
            traverse (node.left)
            result.push (callback ? callback(node) : node.data)
            traverse (node.right)
        }
    }

    traverse(root)
    return result
}

function preOrder (root, callback){
    let result = []

    function traverse (node){
        if(node){
            result.push(callback ? callback(node) : node.data)
            traverse(node.left)
            traverse(node.right)
        }
    }

    traverse(root)
    return result
}

function postOrder (root, callback){
    let result = []

    function traverse (node){
        if(node){
            traverse(node.left)
            traverse(node.right)
            result.push (callback ? callback(node) : node.data)
        }
    }

    traverse(root)
    return result
}

function height(node){
    if(node === null){
        return -1
    }

    const leftHeight = height(node.left)
    const rightHeight = height(node.right)

    return Math.max(leftHeight, rightHeight) + 1
}

function depth (node){
    if(node === null){
        return -1
    }

    return depth(node.parent) + 1
}

function isBalanced (root){
    if (root === null){
        return true
    }

    function height(node){
        if(node === null){
            return -1
        }

        const leftHeight = height(node.left)
        const rightHeight = height(node.right)

        return Math.max(leftHeight, rightHeight) + 1
    }

    function isBalancedRecursive(node){
        if (node === null){
            return true
        }

        const leftHeight = height(node.left)
        const rightHeight = height(node.right)

        if(Math.abs(leftHeight - rightHeight) > 1){
            return false
        }
        return isBalancedRecursive(node.left) && isBalancedRecursive(node.right)
    }
    return isBalancedRecursive(root)
}

function reBalance(root){
    const elements = []
    newTraversal(root, node => elements.push(node.data))

    return buildTree(elements)
}

function buildTree(array) {
    const sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b)
    console.log(sortedUniqueArray);

    const calculateRootNode = (start, end) => {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const rootNode = new Node(sortedUniqueArray[mid]);

        rootNode.left = calculateRootNode(start, mid - 1);
        rootNode.right = calculateRootNode(mid + 1, end);

        return rootNode;
    };

    return calculateRootNode(0, sortedUniqueArray.length - 1);
}

function newTraversal (node, callback){
    if (node !== null){
        newTraversal(node.left, callback)
        callback(node)
        newTraversal(node.right, callback)
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

const dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(dataArray);

inOrderTraversal(tree.root);

prettyPrint(tree.root);

//Driver Script

function generateRandomNumbersArray(length) {
    const randomNumbers = [];
    for (let i = 0; i < length; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
    return randomNumbers;
}

function printTreeInfo(tree) {
    console.log("Level Order Traversal:");
    console.log(levelOrder(tree.root));

    console.log("\nIn Order Traversal:");
    console.log(inOrder(tree.root));

    console.log("\nPre Order Traversal:");
    console.log(preOrder(tree.root));

    console.log("\nPost Order Traversal:");
    console.log(postOrder(tree.root));
}

const randomNumbersArray = generateRandomNumbersArray(10);
let initialTree = new Tree(randomNumbersArray);

console.log("Is the initial tree balanced?", isBalanced(initialTree.root));

console.log("\nInitial Tree:");
printTreeInfo(initialTree);

const unbalancedNumbersArray = [120, 130, 110];
unbalancedNumbersArray.forEach((num) => insert(initialTree.root, num));

console.log("\nIs the tree unbalanced after additions?", isBalanced(initialTree.root));

initialTree.root = reBalance(initialTree.root);

console.log("\nIs the tree balanced after rebalancing?", isBalanced(initialTree.root));

console.log("\nRebalanced Tree:");
printTreeInfo(initialTree);

prettyPrint(initialTree.root)