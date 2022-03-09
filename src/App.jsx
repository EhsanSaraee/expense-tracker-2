import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {
   const mui = useStyles();

   return (
      <Grid
         container
         spacing={0}
         alignItems="center"
         justifyContent="center"
         style={{ height: '100vh' }}
         className={mui.grid}
      >
         <Grid item xs={12} sm={4}>
            <Details title="Income" />
         </Grid>
         <Grid item xs={12} sm={3}>
            <Main />
         </Grid>
         <Grid item xs={12} sm={4}>
            <Details title="Expense" />
         </Grid>
      </Grid>
   );
};

export default App;
