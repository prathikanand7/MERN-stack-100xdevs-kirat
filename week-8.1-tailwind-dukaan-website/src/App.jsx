

function App() {
  
  return (
    <>
      <div style={{ display: "flex", justifyContent:"space-around" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "blue" }}>hi2</div>    
        <div style={{ backgroundColor: "green" }}>hi3</div>
        <div style={{ backgroundColor: "green" }}>hi3</div>
      </div>
      <div className="grid grid-cols-12 ">
        <div className='bg-red-500 col-span-5'>hi</div>
        <div className='bg-green-500'>hi2</div>
        <div className='bg-orange-500 col-span-3'>hi3</div>
        <div className='bg-yellow-500'>hi3</div>
        <div className='bg-blue-500 col-span-2'>hi3</div>
        <div className='bg-violet-500'>hi3</div>
      </div>
       <div className="flex">
        <div className='bg-red-500 w-[40%]'>hi</div>
        <div className='bg-green-500'>hi2</div>
        <div className='bg-orange-500 w-[25%]'>hi3</div>
        <div className='bg-yellow-500'>hi3</div>
        <div className='bg-blue-500 w-[15%]'>hi3</div>
        <div className='bg-violet-500'>hi3</div>
      </div>
      <div className="bg-yellow-500 md:flex md:bg-green-500">
        <div className='bg-blue-500 w-[20%]'>hi</div>
        <div className='bg-blue-500'>hi2</div>
        <div className='bg-blue-500 w-[25%]'>hi3</div>
        <div className='bg-blue-500'>hi3</div>
        <div className='bg-blue-500 w-[15%]'>hi3</div>
        <div className='bg-violet-500'>hi3</div>
      </div>

    </>
  )
}

export default App
