function nvl(value, replaceWith) {
    return (typeof value !== 'undefined') && !(typeof value === 'number' && isNaN(value)) && (value != null) ? value : replaceWith;
};

function firstOrDefault(collection, replaceWith) {
    return collection.length === 0 ? replaceWith : collection[0];
}