import { Card, CardHeader, Typography, CardContent } from '@material-ui/core';
// import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const Details = () => {
   const mui = useStyles();

   return (
      <Card className={mui.income}>
         <CardHeader title="Income" />
         <CardContent>
            <Typography variant="h5">$50</Typography>
            {/* <Doughnut data="DATA" /> */}
         </CardContent>
      </Card>
   );
};

export default Details;
