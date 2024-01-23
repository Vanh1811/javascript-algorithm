class Node{
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class linkedList {
    constructor (){
        this.head = null;
        this.tail = null;
    }

    append (value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    prepend (value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size (){
        let count = 0;
        let current = this.head;

        while(current){
            count++;
            current = current.nextNode;
        }

        return count;
    }

    listHead (){
        return this.head;
    }

    listTail (){
        return this.tail
    }

    at (index){
        if(!this.head){
            return null;
        }

        let current = this.head;

        for(let i = 1 ; i < index; i++){
            current = current.nextNode;
        }

        return current;
    }

    pop (){
        if(!this.head){
            return null;
        }

        let removedValue = this.head;
        if (this.head === this.tail) {
            removedValue = this.head.value;
            this.head = null;
            this.tail = null;
        }
        else{
            let current = this.head;
            while(current.nextNode !== this.tail){
                current = current.nextNode;
            }

            removedValue = this.tail.value;
            current.nextNode = null;
            this.tail = current;
        }

        return removedValue;
    }

    contains (value) {
        if(!this.head){
            return false;
        }
        else{
            let current = this.head;
            while(current){
                if(current.value === value){
                    return true;
                }else{
                    current = current.nextNode;
                }
            }
            return false;
        }
    }

    find(value){
        if(!this.head){
            return null
        }
        else{
            let current = this.head;
            while(current){
                if(current.value === value){
                    return current;
                }else{
                    current = current.nextNode;
                }
            }
            return null;
        }
    }

    toString (){
        let result = '';
        let current = this.head;
        while (current) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }
            result += 'null';
            return result;
    }

    insertAt (value, index){
        const newNode = new Node(value);

        if(index  === 0){
            newNode.nextNode = this.head;
            this.head = newNode;
            if(!this.tail){
                this.tail = newNode;
            }
        }
        else{
            let current = this.head;
            let currentIndex = 0;
            while(current && currentIndex < index - 1){
                current = current.nextNode;
                currentIndex++;
            }

            if(current){
                newNode.nextNode = current.nextNode;
                current.nextNode = newNode;

                if(!newNode.nextNode){
                    this.tail = newNode;
                }
            }else{
                console.error('Error');
            }
        }
    }

    removeAt(index){
        if(index === 0){
            if(this.head){
                this.head = this.head.nextNode;
                if(!this.head){
                    this.tail = null;
                }
            }
        }else{
            let current = this.head;
            currentIndex = 0;
            while(current && currentIndex < index - 1){
                current = current.nextNode;
                currentIndex++;
            }

            if(current && current.nextNode){

                current.nextNode = current.nextNode.nextNode;

                if(!current.nextNode){
                    this.tail = current;
                }
            }else{
                console.error('Error');
            }
        }
    }
}