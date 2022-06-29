function reconstructQueue(people: number[][]): number[][] {
    // create new queue, with same size as people (to fill new order)
    const res = new Array<number[]>(people.length);
    // sort people based on heights ascending, if equal, sort based on second value asc
    people.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    // iterate through people
    for (let i = 0; i < people.length; i++) {
        // count of number of people in front of current that are taller
        let count = people[i][1];
        // iterate thru res to find a place to fill
        for (let j = 0; j < res.length; j++) {
            // check if count is 0 (no people to the left with greater height)
            // AND that we can fill here (empty spot)
            if (count === 0 && !res[j]) {
                // fill and break
                res[j] = people[i];
                break;
            }
            // or, if this spot is vacant, or it's a taller person than current
            else if (!res[j] || res[j][0] >= people[i][0]) {
                count--;
            }
        }
    }

    return res;
}