import React from 'react';
import './App.css';

import { Layout } from './layout';
import DynamicForm from './components/DynamicForm';
import { userCredentialsForm } from './data/userCredentialsForm';
import { userDetailsForm } from './data/userDetailsForm';

function App() {
  return (
    <>
      <Layout>
        <DynamicForm fields={userCredentialsForm} />
      </Layout>
    </>
  );
}

export default App;
