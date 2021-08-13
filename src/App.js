import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './components/CategoriasContext';

function App() {
  return (
    <CategoriasProvider>
      <Header />

        <div className="container mt-5">
          <div className="row"></div>
          <Formulario />
        </div>
    </CategoriasProvider>
  );
}

export default App;
