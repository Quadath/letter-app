import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet, redirect } from 'react-router-dom'
import { useAppDispatch } from './hooks';
import { useTypedSelector } from './hooks/useTypedSelector';

import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/Header';
import { getCurrentUser } from './services/authService';
import { UserPage } from './pages/UserPage';
import { UserFetchActionTypes } from './store/types/UserTypes';

function App() {

  const {user : currentUser, loading, errors} = useTypedSelector(state => state.session)
  const dispatch = useAppDispatch()

  
  useEffect(() => {
    dispatch({type: UserFetchActionTypes.USER_FETCH_LOADING})
    dispatch(getCurrentUser())
  }, [])

  return (
    <Router>
      <div className="bg-neutral-900 h-screen overflow-auto">
      <Header user={user == null ? 'Guest' : user.name} link={user == null ? 'auth/register' : `users/${user.username}`}/>
        <Routes>
          <Route path="auth" element={<Outlet/>}>
              <Route path="register" element={<RegisterPage/>}/>
              <Route path="login" element={<LoginPage/>}/>
          </Route>
          <Route path="users/:username" element={<UserPage current={currentUser}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
