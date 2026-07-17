

function EventHandling(){
    function greet(){
        alert("Welcome")
    }

    return (
        <button onClick={greet}>
            Click Me
        </button>
    );
}

export default EventHandling;