import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   desktop: {
      [theme.breakpoints.up('sm')]: {
         display: 'none',
      },
   },
   mobile: {
      [theme.breakpoints.down('sm')]: {
         display: 'none',
      },
   },
   main: {
      [theme.breakpoints.up('sm')]: {
         paddingBottom: '5%',
      },
   },
   last: {
      [theme.breakpoints.down('sm')]: {
         paddingBottom: '200px',
         marginBottom: theme.spacing(3),
      },
   },
   grid: {
      '& > *': {
         margin: theme.spacing(2),
      },
   },
}));
