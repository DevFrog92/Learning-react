const Clock = ({time}) => {
  return <p className="clock">{time.getTime()}</p>
}

export default Clock;
