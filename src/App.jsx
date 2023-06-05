
function App() {
  return (<>
    <h1>react vite tailwind daisyui</h1>
    <div data-theme="cupcake" className="text-4xl">
      <button className="btn">Button</button>
      <button className="btn btn-lg btn-neutral">Neutral</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-sm btn-secondary">Button</button>
      <button className="btn btn-xs btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button></div>
    <span className="loading loading-spinner text-primary"></span>
    <span className="loading loading-spinner text-secondary"></span>
    <span className="loading loading-spinner text-accent"></span>
    <span className="loading loading-spinner text-neutral"></span>
    <span className="loading loading-spinner text-info"></span>
    <span className="loading loading-spinner text-success"></span>
    <span className="loading loading-spinner text-warning"></span>
    <span className="loading loading-spinner text-error"></span>
    <select className="select select-primary w-full max-w-xs">
      <option disabled selected>What is the best TV show?</option>
      <option>Game of Thrones</option>
      <option>Lost</option>
      <option>Breaking Bad</option>
      <option>Walking Dead</option>
    </select>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>
    <div className="radial-progress" style={{"--value":0}}>0%</div>
<div className="radial-progress" style={{"--value":20}}>20%</div>
<div className="radial-progress" style={{"--value":60}}>60%</div>
<div className="radial-progress" style={{"--value":80}}>80%</div>
<div className="radial-progress" style={{"--value":100}}>100%</div>
  </>)
}

export default App
