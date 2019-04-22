export default {
    add(...args) {
        return args.reduce((num, tot) => tot + num)
    },
    serialize(...args) {
        let newObj = {};
        args.row && args.row.forEach((data, index) => {
            for (const key in data) {
                if (data.hasOwnProperty('hits')) {
                    newObj['hits' + index + _ + key] = data[key];
                } else {
                    newObj['row' + index + _ + key] = data[key];
                }
            }
        });
        return newObj;
    }
};