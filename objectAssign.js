
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
    if (target === null || target === undefined) throw new Error('invalid target')

    let result = target
    if (['number', 'string', 'boolean', 'bigint'].includes(typeof target)) {
        result = Object(target)
    }

    for (let source of sources) {
        if (source === null || source === undefined) continue

        if (['number', 'string', 'boolean', 'bigint'].includes(typeof source)) {
            source = Object(source)
        }

        Reflect.ownKeys(source)
            .filter(prop => Object.getOwnPropertyDescriptor(source, prop).enumerable)
            .forEach(prop => {
                if (!Reflect.set(result, prop, source[prop])) {
                    throw new Error('cannot assign to read-only properties')
                }
            })
    }
    return result
}