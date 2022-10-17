import moment from 'moment';

let dateCalculator = (targetDate) => {
    const duration = moment.duration(moment(new Date()).diff(targetDate));
    const result =  Object.entries(duration._data).reverse().find(e => e[1] > 0).reverse();
    result[0] == 1 && (result[1] = result[1].slice(0, -1))
    return result.join(" ") + " ago"
}

export default dateCalculator