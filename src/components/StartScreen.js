import './StartScreen.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
        <div className='icon_div'>
          <span className='icon'>?</span>
        </div>
        <h1>Palavra Secreta</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Jogar</button>
        <footer>
        &copy; Nathan Fernandes
        </footer>
    </div>
  )
}

export default StartScreen