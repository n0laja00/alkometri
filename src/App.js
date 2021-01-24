import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight]  = useState(89);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1); 
  const [gender, setGender]=useState("male");
  const [result, setResult]=useState();

    function handleSubmit(e) {
      e.preventDefault();
      const litres = bottles*0.33;
      const grams = litres * 8 * 4.5; 
      const burning = weight/10; 
      const gramsLeft = grams - (burning * time);
      if (gender == "male"){
        setResult((gramsLeft/(weight*0.7)).toFixed(2));
      } else {
        setResult((gramsLeft/(weight*0.6)).toFixed(2));
      };
      
    };
  
  return (
    <>
      <div class="col-5 mx-auto">
        <h3>Alakomaholin määrä veressä -laskuri</h3>
        <form onSubmit={handleSubmit} class="mb-5">
          <div class="pt-3">
              <label for="weight">Gibe Weight Macho mann</label>
              <input name="weight" id="weight" class="form-control" type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
          </div>
          <div class="pt-3">
            <label for="bottles">Hew many pulloo drinkkered du?</label>
            <input name="bottles" id="bottles" class="form-control" type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
          </div>
          <div class="pt-3">
            <label for="time">Kuinkas pitkää o siitä ku jäbä viimeks veti skumppaa? (Tunteina)</label>
            <input name="time" id="time" class="form-control" type="number" value={time} onChange={e => setTime(e.target.value)}></input>
          </div>
          <div class="pt-3">
            <label>Onks jäbä jäbä vai missi?</label>
            <div class="pt-3"> 
              <input type="radio" class="form-check-input" name="sex" value="male" id="male" defaultChecked onChange={e => setGender(e.target.value)}/><label for="male">Jäbä</label>
            </div>
            <div class="pt-3">
              <input type="radio"class="form-check-input"  name="sex" value="female" id="female" onChange={e => setGender(e.target.value)}/><label for="female">Missi</label>
            </div>
          </div>
          <div>
            <output class="mt-2 p-1 mb-2">{result}</output>
          </div>
          <button class="btn btn-primary">Calculate</button>
        </form>
      </div>
    </>
  );
};

export default App;
