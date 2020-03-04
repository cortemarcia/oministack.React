import React, { useState, useEffect } from 'react';
import api from './services/api';  
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';


function App() {
  //Criando estados-->
  const [github_username, setGithub_Username] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

   async function handleAddDev(e){
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })
     console.log(response.data)
  }


  return (

    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit = {handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GiHub </label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithub_Username(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Techs </label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude </label>
              <input type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude </label>
              <input type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}/>
            </div>
            <button type="submit"> Salvar </button>
          </div> 

          
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://github.com/account " alt="Foto Marcia"></img>
              <div className="user-info">
                <strong>Marcia Corte</strong>
                <span>Python, JS, Node.js</span>
              </div>
            </header>
            <p>Biografia</p>
            <a href="https://github.com/cortemarcia">Acessar perfi do GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://github.com/account " alt="Foto Marcia"></img>
              <div className="user-info">
                <strong>Marcia Corte</strong>
                <span>Python, JS, Node.js</span>
              </div>
            </header>
            <p>Biografia</p>
            <a href="https://github.com/cortemarcia">Acessar perfi do GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://github.com/account " alt="Foto Marcia"></img>
              <div className="user-info">
                <strong>Marcia Corte</strong>
                <span>Python, JS, Node.js</span>
              </div>
            </header>
            <p>Biografia</p>
            <a href="https://github.com/cortemarcia">Acessar perfi do GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://github.com/account " alt="Foto Marcia"></img>
              <div className="user-info">
                <strong>Marcia Corte</strong>
                <span>Python, JS, Node.js</span>
              </div>
            </header>
            <p>Biografia</p>
            <a href="https://github.com/cortemarcia">Acessar perfi do GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}


export default App;
