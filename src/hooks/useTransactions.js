import {
   expenseCategories,
   incomeCategories,
   resetCategories,
} from '../constants/categories';
import { useExpenseTrackerContext } from '../context/context';

const useTransactions = (title) => {
   resetCategories();
   const { transactions } = useExpenseTrackerContext();
   const rightTransactions = transactions.filter((t) => t.type === title);
   const total = rightTransactions.reduce(
      (acc, currVal) => (acc += currVal.amount),
      0
   );
   const categories = title === 'Income' ? incomeCategories : expenseCategories;

   rightTransactions.forEach((t) => {
      const category = categories.find((c) => c.type === t.category);

      if (category) category.amount += t.amount;
   });

   const filteredCategories = categories.filter((c) => c.amount > 0);

   const chartData = {
      datasets: [
         {
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
         },
      ],
      labels: filteredCategories.map((c) => c.type),
   };

   return { filteredCategories, total, chartData };
};

export default useTransactions;
