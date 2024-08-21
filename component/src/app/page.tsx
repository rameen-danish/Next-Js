
export default function Home() {
  return (
    <main>
      <Greetings name="Rameen"/>          
      <Greetings name="Abeeha"/>
      <Greetings name="Bismah"/>
      <Greetings name="Zaeema"/>
    </main>
  );
}
// Making Component
const Greetings = (props:any)=>{
  return(
    <div>
      <h2>Hello {props.name}! , Welcome to our coding world</h2>
    </div>
  )
}
