function LinkedList() {
    this.head = null;
    this.tail = null;    
}

function Node(prev, value, next) {

    this.prev = prev;
    this.value = value;
    this.next = next;

}

// Add to Head
LinkedList.prototype.addToHead = function(value) {

    let newNode = new Node(null, value, this.head);

    if(this.head){
        this.head.prev = newNode;
    }
    else{
        this.tail = newNode;
    }

    this.head = newNode;

};

// Add to Tail
LinkedList.prototype.addToTail = function(value) {

    let newNode = new Node(this.tail, value, null);

    if(this.tail){
        this.tail.next = newNode;
    }
    else{
        this.head = newNode;
    }

    this.tail = newNode;

};


LinkedList.prototype.removeHead = function(){

    if(!this.head){
        return null;
    }

    let val = this.head.value;

    this.head = this.head.next;

    if(this.head){
        this.head.prev = null;
    }
    else {
        this.tail = null;
    }

    return val;

};

LinkedList.prototype.removeTail = function(){

    if(!this.tail){
        return null;
    }

    let val = this.tail.value;

    this.tail = this.tail.prev;

    if(this.tail){
        this.tail.next = null;
    }
    else {
        this.head = null;
    }

    return val;

};


// Traversing the linked list printing each node

LinkedList.prototype.traverse = function(){

    let currentNode = this.head;
    console.log('head node value is ' + currentNode.value);

    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode === this.tail)
            console.log('tail node value is ' + currentNode.value);
        else
            console.log('next node value is ' + currentNode.value);
    }

};


// Add node to nth position
LinkedList.prototype.addToN = function(value, n){

    if(n === 0){
        this.addToHead(value);
        return;
    }

    //find n - 1th node
    let prevOFN = this.head;

    for(let i = 0; i < n - 1; i++){
        prevOFN =(prevOFN)? prevOFN.next : null;
    }

    if(!prevOFN){
        throw 'nth node not found'
    }

    let newNode = new Node(prevOFN, value, prevOFN.next);

    if(prevOFN.next){
        prevOFN.next.prev = newNode;
    }
    else {
        this.addToTail(value);
        return;
    }

    // set new node
    prevOFN.next = newNode;

};




ll = new LinkedList();

// ll.addToHead(300);
//
// ll.addToHead(400);
//
// ll.addToTail(200);
//
// ll.addToTail(100);
//
// ll.removeHead();
//
// ll.removeTail();

console.log(ll);