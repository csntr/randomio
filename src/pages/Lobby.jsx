import { Link } from "react-router-dom";

function Lobby() {
  return (
    <main>
      <h1>This is the lobby</h1>
      <Link to="/room">Create a room</Link>
    </main>
  )
}

export default Lobby
