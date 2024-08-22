
export default function Home() {
  // Making Component
  const Greetings = (props:any)=>{
    return(
      <div>
        <h2>Hello {props.name}! , Welcome to our coding world</h2>
      </div>
    )
  }
  // Making another component
  const Message = ()=>{
    return(
      <h2>GIAIC Senior Students</h2>
    )
  }
  return (
    <main>
      {/*  calling component  */}
      <Greetings name="Rameen"/>          
      <Greetings name="Abeeha"/>
      <Greetings name="Bismah"/>
      <Greetings name="Zaeema"/>
      <Message/>
      {/* calling component as a function */}
      {Message()}
    </main>
  );
}


