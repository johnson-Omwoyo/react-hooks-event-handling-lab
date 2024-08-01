// Code Keypad Component Here



function Keypad (){
    
const loger=()=>{
console.log('Entering password...')
}
    return (
      <input onChange={loger} type="password"/>
    )
}

export default Keypad;