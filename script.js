const Counter = () => {
    const [count , setCount] = React.useState(0)
    const [taps, totalTaps] = React.useState(0)

    // a function to increment the counter
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        totalTaps((prevTap) => prevTap +1);
    }
    
    // a function ti decrement the counter 
    const decrement = () => {
        if(count > 0){
            setCount((prevCount) => prevCount - 1);
            totalTaps((prevTap) => prevTap + 1 );
        } else {
            totalTaps((prevTap) => prevTap + 1);
        }
    } 
    
    // a function to reset the count only
    const resetCount = () => setCount(0)
    
    // a function to reset the count and the total taps
    const resetAll = () => {
        setCount(0);
        totalTaps(0);
    }


    return (
        
            <div className="counter">
                <h1>Counter</h1>
                <h2 className="count"> {count} </h2>
                <h4 className="taps"> Total Taps: {taps} </h4>
                <div>
                    <button onClick={decrement}>Decrement -</button>
                    <button onClick={increment}>Decrement +</button>
                </div>
                <div>
                    <button className="reset-count" onClick={resetCount}>Reset Count</button>
                    <button className="reset-all" onClick={resetAll}>Reset All</button>
                </div>
            </div>
        
    )
}

const App = () =>{
    const [counterIsShown, setCounterShow] = React.useState(true)
    const [buttonState, setButtonState] = React.useState("Hide Counter") 
    const toggleCounter = () => {
        setCounterShow(prevCounter => {setCounterShow(!prevCounter)})
        if(buttonState==="Hide Counter"){
            setButtonState("Show Counter")
        }else{
            setButtonState("Hide Counter")
        }
    }
   
    return (
        <div className="app">
            <button className="toggle-button" onClick={toggleCounter}>{buttonState}</button>
            {counterIsShown && <Counter />}
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)