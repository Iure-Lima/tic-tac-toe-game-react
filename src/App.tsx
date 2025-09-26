import './App.css'
import Player from './components/PlayerComponent/Player'

function App() {

  return (
    <main>
      <section id="game-container">
        <ol id="players">
          <Player initialName='Iure' symbol="X"/>
          <Player initialName='Lucas' symbol="O"/>
        </ol>

        game-board
      </section>

      log
    </main>
  )
}

export default App
