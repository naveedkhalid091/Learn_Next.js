## useEffect Hook:

It is a react hook which is used to handle the `side effects` in your components.

What does `side effects` means?

When you wanted to connect your components with:

1. External systems like (APIs, databases).
2. Fetching data.
3. Tracking user clicks or navigation.
4. Showing live/disconnected users in a chat or application.

You might need to fetch data from any library or through API which is not bound to follow the react guidlines etc. This situation is called `sideEffect`.

React has introduced `useEffect()` to deal with such situations.

The syntax of useEffect is:

    useEffect(setup,dependencies?)

Where:
setup is set thourgh an arrow function, while dependencies are written inside an array []

For Example:

    `useEffect(()=>{}, [])`

    import {useState,useEffect} from 'react'
        function App(){
            const [count,setCount]=useState(0)

            function Increament(){
            setcount(count+1)
            }

            function decreament(){
            setcount(count-1)
            }

            useEffect(()=>{
                alert("Hay welcome to my App")
                },[])

            useEffect(()=>{
                alert("Count Changed")
                },[count])



        return(
        <button Onclick={Increament}>
           Increament{count}
        </button>
        <br/>
        <button Onclick={decreament}>
           Decreament {count}
        </button>
        )}

Interpretation of Above Code:

useEffect(()=>{
alert("Hay welcome to my App")
},[])

In nbove part of the code don't have any dependancy mentioned inside [], this means alert will show after the data will rendered without any restrictions.

    useEffect(()=>{
    alert("Hay welcome to my App")
    },[count])

In the above part of the code, You have linked your state with UseEffect via dependency, as the 'counter` mentioned inside []. This means alert will only show "Count Changed" after the user will click on the button.
