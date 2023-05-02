import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export const App = (
  // write your React Code here
  <div>
    <h1 className="text-center">My contacts list 📱</h1>
    <div className="person-item">
      <h3>paul emploa</h3>
      <h4>
        oé@pnj.fr <br /> 06-05-04-03-02
      </h4>
      <button>Delete</button>
    </div>
    <div className="person-item">
      <h3>j'vepa enfercink</h3>
      <h4>
        banan@oula.fr <br /> 06-05-04-03-01
      </h4>
      <button>Delete</button>
    </div>
    <div className="person-item">
      <h3>moajve unconstructor</h3>
      <h4>
        unconstructor@Cémieu.oé <br /> 06-06-04-03-01
      </h4>
      <button>Delete</button>
    </div>
    <div className="person-item">
      <h3>j'vepa enfercinq</h3>
      <h4>
        banan@oula.fr <br /> 06-05-04-03-01
      </h4>
      <button>Delete</button>
    </div>
    <div className="person-item">
      <h3>cell der</h3>
      <h4>
        fini@finito.fin <br /> 06-05-04-00-01
      </h4>
      <button>Delete</button>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
