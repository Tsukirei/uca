import React from 'react';
import './App.css';
import styled from 'styled-components';
import Mesa from './Mesa';
import Butto from './Butt';
import Nameta from './Nametag';
import juego from './juego'


const AppWrapper = styled.div`
text-align: center;
`;
const finch = '1';

const finchi = '0';

const userx = 'Xavi';

const usero = 'Oscar';

const usera = 'Andrés';

const userj = 'Julio'; 

function App() {
  return (
    <AppWrapper>
      <div className="App">


        <Mesa mesa={finch} />
        <Butto cont={finchi} />
        <juego/>
        {/* <div className="cuadro-div">
          <div className="cuadrom-div">
            <div className="cuadrot-div">
              <div className="circulo">
                <img src="./ironman.jpg" alt="avatar" className="imagen" />

              </div>
              <div className="userX">
                <Nameta Namet={userx} />
              </div>
            </div>
            <div className="cuadradosr">

            </div>
          </div>
          <div className="cuadrom-div">
            <div className="cuadrot-div">
              <div className="circulo">
                <img src="./ironman.jpg" alt="avatar" className="imagen" />

              </div>
              <div className="userX">
                <Nameta Namet={usero} />
              </div>
            </div>
            <div className="cuadradosm">

            </div>
          </div>
        </div>
        <div className="playg">
         <juego/>
        </div>
        <div className="cuadro-div">
          <div className="cuadromm-div">
            <div className="cuadrott-div">
              <div className="circuloc">
                <img src="./ironman.jpg" alt="avatar" className="imagen" />

              </div>
              <div className="userX">
                <Nameta Namet={userj} />
              </div>
            </div>
            <div className="cuadradosrr">

            </div>
          </div>
          <div className="cuadromm-div">
            <div className="cuadrott-div">
              <div className="circuloc">
                <img src="./ironman.jpg" alt="avatar" className="imagen" />

              </div>
              <div className="userX">
                <Nameta Namet={usera} />
              </div>
            </div>
            <div className="cuadradosmm">

            </div>
          </div>
        
        
        
        <div className="under">
        
        </div>*/}
      

      </div>
    </AppWrapper>
  );
}

export default App;
