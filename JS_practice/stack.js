// creating a stack class
// which have 
// properties - count
// methods - push , pop, peek


// creating private member using weakmap
const _items = new WeakMap();

class Stack{
    constructor(){
        _items.set(this, []);
    }

    get count(){
        return _items.get(this).length;
    }

    push(elem){
        _items.get(this).push(elem);
    }

    peek(){
        if(_items.get(this).length === 0){
            throw new Error("Stack is Empty");
        }
        return _items.get(this)[_items.get(this).length - 1];
    }
    pop(){
        if(_items.get(this).length === 0){
            throw new Error("Stack is Empty");
        }
        return _items.get(this).pop();
    }

}