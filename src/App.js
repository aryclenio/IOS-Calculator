import React from 'react';
import Layout from './components/layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';

function App() {
  return (
    <div >
      <Layout>
        <BurguerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
