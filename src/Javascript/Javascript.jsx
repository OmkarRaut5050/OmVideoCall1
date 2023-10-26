
const javascript = () =>{
    const name = "Kunal";
    const age = 23;

    function clicked(){
        document.body.style.background="red";
    }

    return(
        <div className="javascript">
            <h1>`My name is ${name} and my age is ${age}`</h1>
            <h1>{`My name is ${name} and my age is ${age}`}</h1>
            <button onClick ={clicked}>click</button>

        </div>

    )
} 

export default javascript

