import React,{useState} from "react";

function App() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")

  const [status, setStatus] = useState('');

  const [bmiResult, setBmiResult] = useState("");

  function changeHeight(event){
    let value = event.target.value
    setHeight(value)
  }

  function changeWeight(event){
    let value = event.target.value
    setWeight(value)
  }

  function calculateBMI(){
    let calculate = Math.floor((height / (weight/100) ** 2))
    setBmiResult(calculate)
    setStatus(()=>{
      if(calculate < 18){
        return 'Anda terlalu kurus'
      }else if(calculate >= 18 && calculate <= 25){
        return 'Anda normal'
      }else if(calculate >= 25 && calculate <= 27){
        return 'Anda kegemukan'
      }else if(calculate > 27){
        return 'Anda obesitas'
      }
    })
  }

  return (
    <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Berat
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Masukkan berat badanmu" value={height} onChange={changeHeight}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Tinggi
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Masukkan tinggi badanmu" value={weight} onChange={changeWeight}/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={calculateBMI}>
        Submit
      </button>
    </div>
    <div className="mt-5">
      <h3>Total BMI : {bmiResult}</h3>
      <h3>Status BMI : {status}</h3>
    </div>
  </form>
</div>
  );
}

export default App;
