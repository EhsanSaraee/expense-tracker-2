import {
   List as MUIList,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Avatar,
   ListItemSecondaryAction,
   IconButton,
   Slide,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { useExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
   const mui = useStyles();
   const { deleteTransaction, transactions } = useExpenseTrackerContext();

   return (
      <MUIList dense={false} className={mui.list}>
         {transactions?.map((transaction) => (
            <Slide
               key={transaction.id}
               direction="down"
               in
               mountOnEnter
               unmountOnExit
            >
               <ListItem>
                  <ListItemAvatar>
                     <Avatar
                        className={
                           transaction.type === 'Income'
                              ? mui.avatarIncome
                              : mui.avatarExpense
                        }
                     >
                        <MoneyOff />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                     primary={transaction.category}
                     secondary={`$${transaction.amount} - ${transaction.date}`}
                  />
                  <ListItemSecondaryAction>
                     <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={deleteTransaction}
                     >
                        <Delete />
                     </IconButton>
                  </ListItemSecondaryAction>
               </ListItem>
            </Slide>
         ))}
      </MUIList>
   );
};

export default List;
