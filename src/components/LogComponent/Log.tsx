import "./Log.css"

interface Props {
  logs: string[]
}

function Log({logs}:Props){
  return (
    <ol id="log">
      {logs.map((log,logIndex) => (
        <li key={logIndex} className={logIndex === 0 ? "highlighted": undefined}>{log}</li>
      ))}
    </ol>
  )

}

export default Log;