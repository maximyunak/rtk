import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/redusers/UserSlice';
import { fetchUsers } from './store/redusers/ActionCreators';
import PostContainer from './components/PostContainer';

const App = () => {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div style={{ display: 'flex' }}>
      {/* {isLoading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </div>
  );
};

export default App;
