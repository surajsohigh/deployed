import {useParams} from 'react-router-dom'
// import { AppContext } from '../context/context';
import { useGlobalContext } from '../context/context';


function Card() {
    const {id} = useParams();
    // const name = useContext(AppContext)
    const { appContextValue, userContextValue } = useGlobalContext();

    console.log(id)
  return (
    <>
    <div>Card {userContextValue}</div>
    <div>Card {appContextValue.last}</div>
    </>
  )
}

export default Card