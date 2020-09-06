import React from 'react';
import useData from './hooks/useData';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Loader from './components/Loader';

const API = 'https://us-central1-ale-dev-api.cloudfunctions.net/api';

const App = () => {
  const data = useData(API);
  return data.length === 0 ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <Main
        name={data.name}
        profession={data.profession}
        bio={data.bio}
        projects={data.projects}
        certificates={data.certifications}
        experience={data.experience}
        skills={data.skills}
      />
      <Footer />
    </div>
  );
};

export default App;
