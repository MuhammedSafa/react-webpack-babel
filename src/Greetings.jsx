var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
const dayName = days[d.getDay()];

console.log(dayName);
const Hello = () => <h1>Greetings, today is : {dayName}</h1>;

export default Hello;