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
import { UserSearch } from './pages/UserSearch';

function App() {

  const {user : currentUser, loading, errors} = useTypedSelector(state => state.session)
  const dispatch = useAppDispatch()

  
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <Router>
      <div className="bg-neutral-900 h-screen overflow-auto">
      <Header user={currentUser == null ? 'Guest' : currentUser.name} link={currentUser == null ? 'auth/register' : `users/${currentUser.username}`}/>
        <Routes>
          <Route path="auth" element={<Outlet/>}>
              <Route path="register" element={<RegisterPage/>}/>
              <Route path="login" element={<LoginPage/>}/>
          </Route>
          <Route path="users/:username" element={<UserPage current={currentUser}/>}/>
          <Route path="users" element={<UserSearch/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
