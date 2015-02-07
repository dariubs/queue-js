var Queuejs = function(){
    this._storage = [];
    this.temp = "Empty";
}

Queuejs.prototype.enqueue = function(data) {
    this._storage.push(data);
}

Queuejs.prototype.dequeue = function(){
    this._storage = this._storage.slice(1,this._storage.length);
}

Queuejs.prototype.peek = function(){
    this.temp = this._storage[0];
    this._storage = this._storage.slice(1,this._storage.length);
    return this.temp;
}