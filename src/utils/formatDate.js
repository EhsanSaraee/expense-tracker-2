const formatDate = (date) => {
   const currentDate = new Date(date);
   let currentMonth = `${currentDate.getMonth() + 1}`;
   let currentDay = `${currentDate.getDay()}`;
   let currentYear = currentDate.getFullYear();

   if (currentMonth.length < 2) currentMonth = `0${currentMonth}`;

   if (currentDay.length < 2) currentDay = `0${currentDay}`;

   return [currentYear, currentMonth, currentDay].join('-');
};

export default formatDate;
