class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total
    }
    set(key, value) {
        let pair = [key, value];
        let hash = this.keyMap[this._hash(key)];
        
        if (!hash) this.keyMap[this._hash(key)] = [pair];
        else this.keyMap[this._hash(key)].push(pair);    
    }
    get(key) {

        let hash = this.keyMap[this._hash(key)]
        if (!hash) return undefined;
        for (let i = 0; i < hash.length; i++) {
            if (hash[i][0]===key) return hash[i][1];
        }
        return undefined;
    }
    keys() {
  
        let keys = [];
        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i].length; j++) {
                    if (!(this.keyMap[i][j][0] in keys)) keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }
    values() {
        let values = [];
        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i].length; j++) {
                    if (!(this.keyMap[i][j][1] in values)) values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
}

hashT = new HashTable()
hashT.set("hello", 5)
hashT.set("hell", 4)
console.log(hashT.get("helo"))
console.log(hashT)
console.log(hashT.keys())