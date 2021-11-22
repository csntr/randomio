import { useNavigate } from "react-router-dom";
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

function Lobby() {
  const navigate = useNavigate()

  const onRoomCreate = async () => {
    try {
      const docRef = await addDoc(collection(db, 'rooms'), {
        members: [],
        createdAt: serverTimestamp()
      }); 

      navigate(`/room/${docRef.id}`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h1>This is the lobby</h1>
      <button onClick={onRoomCreate}>Create a room</button>
    </main>
  )
}

export default Lobby
