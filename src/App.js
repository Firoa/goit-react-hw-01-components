
import React, { Fragment } from "react";
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statictics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friendListData from './components/FriendList/friends.json';
import TransactionsHistory from './components/Transactions/TransactionsHistory';
import transactions from './components/Transactions/transactions.json';

const App = () => (
    <Fragment>
    <Profile {...user} />,
    <Statictics statictics={statisticalData} title="Upload stats" />
    <FriendList friends={friendListData} />
    <TransactionsHistory transactions={transactions} />
    </Fragment>
);

export default App;
