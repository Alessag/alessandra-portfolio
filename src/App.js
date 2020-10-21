import React from 'react';
import useData from './hooks/useData';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { Wrapping, PageFade } from './components/Button';

const API = 'https://us-central1-ale-dev-api.cloudfunctions.net/api';

const App = () => {
  const data = useData(API);
  return data.length === 0 ? (
    <Loader />
  ) : (
    <Wrapping>
      <PageFade />
      <Header />
      <Main
        name={data.name}
        profession={data.profession}
        bio={data.bio}
        projects={data.projects}
        certificates={data.certifications}
        experience={data.experience}
        skills={data.skills}
        urlCv={data.urlCv}
      />
      <Footer />
    </Wrapping>
  );
};

export default App;
