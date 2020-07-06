'use strict';
module.exports = Heap;

class Heap {
    constructor(heap, greatest, equals, swap){
        this.heap = heap
        this.greatest = greatest
        this.equals = equals
        this.swap = swap
    }
    heapify(len,i){
        let top = i;
        let left = i * 2 + 1;
        let right = left + 1;

        if (left < len && this.greatest(this.heap[left],this.heap[top])){
            top = left;
        }

        if (right < len && this.greatest(this.heap[right],this.heap[top])){
            top = right;
        }

        if (top != i) {
            this.swap(this.heap[right],this.heap[left]);
            this.heapify(this.heap,len,top);
        }
        return this.heap
    }
    heapsort(){
        let len = this.heap.length;
        let i = Math.floor.apply(len/2-1);
        let k = len -1;

        while (i >=0){
            this.heapify(this.heap.length, i);
            i--;
        }

        while (k >= 0){
            this.swap(this.heap[0], this.heap[k]);
            this.heapify(k,0);
            k--;
        }
        return this.heap;
    }
}