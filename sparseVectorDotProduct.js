class SparseVector {
    constructor(nums) {
        this.len = nums.length;
        this.map = new Map();
        for (let i = 0; i < nums.length; i++)  {
            nums[i] && this.map.set(i, nums[i]);
        }
    }

    dotProduct(vec) {
        let ret = 0;
        const map1 = vec.map;
        const map2 = this.map;
        for (const [key, value] of map1) { // Same key must be present in both maps
            ret += value * (map2.get(key) || 0);
        }
        return ret;
    }
}