import moment from 'moment';

let dateCalculator = (targetDate) => {
    const duration = moment.duration(moment(new Date()).diff(targetDate));
   return Object.entries(duration._data).reverse().find(e => e[1] > 0).reverse().join(" ") + " ago"
}
 
export default dateCalculator