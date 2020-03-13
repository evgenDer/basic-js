let max_depth=0;
module.exports = class DepthCalculator {
        calculateDepth(arr, depth=1) {
        let result=0;
         if(!Array.isArray(arr))
        {
            return 0;
        }

        for(let i=0; i<arr.length;i++)
        {
            if(Array.isArray(arr[i])){
                max_depth=this.calculateDepth(arr[i], depth+1);
            }
        }
        if(max_depth<depth)
            max_depth=depth;
        result=max_depth;
        max_depth=0;
        return result;

    }
};
