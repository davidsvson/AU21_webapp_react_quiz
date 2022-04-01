import { Link } from "react-router-dom";

const Welcome = ({nextScreen }) => {
    
    return (
        <section>
            <h2>Välkommen till denna Quiz!</h2>
            <p>Vill du sätta igång?</p>
            <Link to="/game" >
                <button>Ja!</button>
            </Link>
        </section>
    )
}

export default Welcome;
