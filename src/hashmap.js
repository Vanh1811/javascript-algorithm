class hashMap {
    constructor (initialCapacity = 16, loadFactor = 0.75){
        this.capacity = initialCapacity
        this.loadFactor = loadFactor
        this.size = 0
        this.buckets = new Array(this.capacity).fill(null).map(() => [])

    }

    hash (string){
            let hashCode = 0

            const primeNum = 31
            for (let i = 0; i < string.length; i++){
                hashCode = hashCode * primeNum + string.charCodeAt(i)
            }

            return hashCode
    }

    set (key ,value){
        const index = this.getIndex(key)
        const bucket = this.buckets[index]

        for (const entry of bucket){
            if (entry.key === key){
                entry.value = value
                return
            }
        }

        bucket.push({key, value})
        this.size++

        if(this.size / this.capacity >= this.loadFactor){
            this.resize()
        }
    }

    getIndex (key){
        const hashCode = this.hash(key)
        return hashCode % this.capacity
    }

    resize (){
        this.capacity *= 2
        const newBuckets = new Array(this.capacity).fill(null).map(() => [])

        for (const bucket of this.buckets){
            for (const entry of bucket){
                const index = this.getIndex(entry.key)
                newBuckets[index].push(entry)
            }
        }

        this.buckets = newBuckets
    }

    get (key){
        const index = this.getIndex(key)
        const bucket = this.buckets[index]

        for (const entry of bucket){
            if (entry.key === key){
                return entry.value
            }
        }
        return null
    }

    has (key){
        const index = this.getIndex(key)
        const bucket = this.buckets[index]

        for (const entry of bucket){
            if (entry.key === key){
                return true
            }
        }
        return false
    }

    length (){
        return this.size
    }

    clear (){
        this.size = 0
        this.buckets = new Array(this.capacity).fill(null).map(() => [])
    }

    keys (){
        const allKeys = []
        for (const bucket of this.buckets){
            for (const entry of bucket){
                allKeys.push(entry.key)
            }
        }

        return allKeys
    }

    values (){
        const allValues = []
        for (const bucket of this.buckets){
            for (const entry of bucket){
                allValues.push(entry.value)
            }
        }

        return allValues
    }

    entries (){
        const allEntries = []
        for (const bucket of this.buckets){
            for (const entry of bucket){
                allEntries.push([entry.key, entry.value])
            }
        }

        return allEntries
    }
}
