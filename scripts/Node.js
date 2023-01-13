function calculateSpacing(level, spacing) {
    for (let i = 0; i < level; i++) {
        spacing /= 2;
    }
    return spacing;
}

class Node {
    constructor(value, x, y, level) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
        this.level = level;
    }

    addNode(node) {
        node.level = this.level + 1;
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node;
                this.left.x = this.x - calculateSpacing(node.level, width / 2);
                this.left.y = this.y + 50;
            } else {
                this.left.addNode(node);
            }
        } else if (node.value > this.value) {
            if (this.right === null) {
                this.right = node;
                this.right.x = this.x + calculateSpacing(node.level, width / 2);
                this.right.y = this.y + 50;
            } else {
                this.right.addNode(node);
            }
        }
    }

    visit() {
        if (this.left !== null) {
            this.left.visit();
        }
        console.log(this.value);
        if (this.right !== null) {
            this.right.visit();
        }
    }

    search(value) {
        if (this.value === value) {
            alert(`Element Found: ${value}`);
            return this;
        } else if (value < this.value && this.left !== null) {
            return this.left.search(value);
        } else if (value > this.value && this.right !== null) {
            return this.right.search(value);
        } else {
            alert(`Element Not Found: ${value}`);
        }
    }

    draw(parent) {
        if (this.left !== null) {
            this.left.draw(this);
        }
        noStroke();
        fill(3, 4, 94);
        ellipse(this.x, this.y, 30);
        stroke(3, 4, 94);
        line(parent.x, parent.y, this.x, this.y);
        noStroke();
        fill(202, 240, 248);
        textAlign(CENTER);
        textSize(16);
        text(this.value, this.x, this.y);

        if (this.right !== null) {
            this.right.draw(this);
        }
    }
}

function minValue(current) {
    while (current.left) {
        current = current.left;
    }
    return current;
}

function removeNode(root, value) {
    let parent = null;
    let current = root;

    while (current != null && current.value != value) {
        parent = current;
        if (value < current.value) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    if (current === null) {
        return root;
    }

    if (current.left === null && current.right === null) {
        if (current !== root) {
            if (parent.left === current) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        } else {
            root = null;
        }
    } else if (current.left && current.right) {
        let sucessor = minValue(current.right);
        let val = sucessor.value;
        removeNode(root, sucessor.value);
        current.value = val;
    } else {
        let child = null;
        if (current.left != null) {
            child = current.left;
        } else {
            child = current.right;
        }

        if (current != root) {
            if (current === parent.left) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        } else {
            root = child;
        }
    }

    return root;
}
