import { Card, CardHeader, Typography, CardContent } from '@material-ui/core';
import useTransactions from '../../hooks/useTransactions';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const Details = ({ title }) => {
   const mui = useStyles();
   const { chartData, total } = useTransactions(title);

   return (
      <Card className={title === 'Income' ? mui.income : mui.expense}>
         <CardHeader title={title} />
         <CardContent>
            <Typography variant="h5">{total}</Typography>
            <Doughnut data={chartData} />
         </CardContent>
      </Card>
   );
};

export default Details;
