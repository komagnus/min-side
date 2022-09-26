import DateCountdown from 'react-date-countdown-timer';

export const Countdown = () => {
    return 
    <DateCountdown 
    dateTo='November 02, 2022 08:20:00 GMT+01:00' 
    callback={()=>alert('Have a nice flight!')}  
    />;
};