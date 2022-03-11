import {
   Card,
   CardHeader,
   CardContent,
   Typography,
   Divider,
   Grid,
} from '@material-ui/core';
import { useExpenseTrackerContext } from '../../context/context';
import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';

const Main = () => {
   const mui = useStyles();
   const { balance } = useExpenseTrackerContext();

   return (
      <Card className={mui.root}>
         <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
         <CardContent>
            <Typography align="center" variant="h5" gutterBottom>
               Total Balance ${balance}
            </Typography>
            <Divider />
            <Form />
         </CardContent>
         <CardContent className={mui.cartContent}>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <List />
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   );
};

export default Main;
