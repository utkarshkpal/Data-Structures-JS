// reverse alternate levels of a perfect binary tree

function reverse(root1, root2, lvl) {
    if (root1 == null || root2 == null) {
        return
    }
    if (lvl % 2 == 0) {
        swap(root1.key, root2.key)
    }

    //recur for left and right tree

    reverse(root1.left, root2.right, lvl + 1);
    reverse(root1.right, root2.left, lvl + 1);
}

function reverseAlternate(root) {
    reverse(root.left, root.right, 0);
}