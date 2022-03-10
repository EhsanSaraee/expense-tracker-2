import {
   Grid,
   Typography,
   TextField,
   InputLabel,
   Button,
   FormControl,
   Select,
   MenuItem,
} from '@material-ui/core';
import { useState } from 'react';
import { useExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
   amount: '',
   category: '',
   type: 'Income',
   date: new Date(),
};

const Form = () => {
   const mui = useStyles();
   const [formData, setFormData] = useState(initialState);
   const { addTransaction } = useExpenseTrackerContext();

   const createTransaction = () => {
      const transaction = {
         ...formData,
         id: uuidv4(),
         amount: Number(formData.amount),
      };
      addTransaction(transaction);
      setFormData(initialState);
   };

   return (
      <Grid container spacing={2}>
         <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
               ...
            </Typography>
         </Grid>
         <Grid item xs={6}>
            <FormControl fullWidth>
               <InputLabel>Type</InputLabel>
               <Select
                  value={formData.type}
                  onChange={(event) =>
                     setFormData({ ...formData, type: event.target.value })
                  }
               >
                  <MenuItem value="Income">Income</MenuItem>
                  <MenuItem value="Expense">Expense</MenuItem>
               </Select>
            </FormControl>
         </Grid>
         <Grid item xs={6}>
            <FormControl fullWidth>
               <InputLabel>Category</InputLabel>
               <Select
                  value={formData.category}
                  onChange={(event) =>
                     setFormData({ ...formData, category: event.target.value })
                  }
               >
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Salary">Salary</MenuItem>
               </Select>
            </FormControl>
         </Grid>
         <Grid item xs={6}>
            <TextField
               value={formData.amount}
               onChange={(event) =>
                  setFormData({ ...formData, amount: event.target.value })
               }
               type="number"
               label="Amount"
               fullWidth
            />
         </Grid>
         <Grid item xs={6}>
            <TextField
               value={formData.date}
               onChange={(event) =>
                  setFormData({ ...formData, date: event.target.value })
               }
               type="date"
               label="Date"
               fullWidth
            />
         </Grid>
         <Button
            className={mui.button}
            color="primary"
            variant="outlined"
            fullWidth
            onClick={createTransaction}
         >
            Create
         </Button>
      </Grid>
   );
};

export default Form;
