/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
    return items.filter(item => !excludes.some(pair => item[pair.k] === pair.v));
}

// online solution: tradeoff

function excludeItems(items, excludes) {

    // create excludesMap <k: string, v: new Set()>
    const excludesMap = excludes.reduce((map, {k, v}) => {
        if (!map.has(k)) map.set(k, new Set())
        map.get(k).add(v)
        return map
    }, new Map())

    return items.filter(item => !Object.keys(item).some(key => excludesMap.has(key) && excludesMap.get(key).has(item[key])))
}