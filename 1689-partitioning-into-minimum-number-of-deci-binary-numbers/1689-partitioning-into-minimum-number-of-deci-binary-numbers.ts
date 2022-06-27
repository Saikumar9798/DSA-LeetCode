function minPartitions(n: string): number {
    let r = 0
    for(const c of n.split("")){
        if(Number(c)>r){
            r=Number(c)
            if(r===9){
                break;
            }
        }
    }
    return r
};