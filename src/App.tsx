import { useState } from 'react'
import { Button } from "@heroui/react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
  <h1 className="text-5xl font-extrabold text-center text-violet-600 tracking-tight drop-shadow-md underline decoration-wavy decoration-pink-500 p-6 rounded-xl bg-white shadow-lg">
    ¡Crypto Dashboard listo!
  </h1>
   <Button variant="solid" color="primary" size="lg">
        ¡Probando Hero UI!
      </Button>
</div>

       
    </>
  )
}

export default App
