const Welcome = ({nextScreen }) => {
    
    return (
        <section>
            <h2>Välkommen till denna Quiz!</h2>
            <p>Vill du sätta igång?</p>
            <button onClick={nextScreen}>Ja!</button>
        </section>
    )
}

export default Welcome;
