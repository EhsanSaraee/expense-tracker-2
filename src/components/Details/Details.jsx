import { Card, CardHeader, Typography, CardContent } from '@material-ui/core';
// import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const Details = ({ title }) => {
   const mui = useStyles();

   return (
      <Card className={title === 'Income' ? mui.income : mui.expense}>
         <CardHeader title={title} />
         <CardContent>
            <Typography variant="h5">$50</Typography>
            {/* <Doughnut data="DATA" /> */}
         </CardContent>
      </Card>
   );
};

export default Details;
