// Code EyesOnMe Component Here
function EyesOnMe() {
    const focuss=()=>{
console.log("Good!")
    }
    const blurr=()=>{
        console.log("Hey! Eyes on me!")
    }
  return <button onFocus={focuss} onBlur={blurr}>
    Eyes on me
  </button>;
}
export default EyesOnMe;
