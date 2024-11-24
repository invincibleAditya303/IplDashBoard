import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="team-match-container">
      <div className="opponent-team-score-container">
        <div className="opponent-team-container">
          <p className="opponent-team-heading">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="opponent-team-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="match-details-container">
        <h1 className="innings-heading">First Innings</h1>
        <p className="innings-details">{firstInnings}</p>
        <h1 className="innings-heading">Second Innings</h1>
        <p className="innings-details">{secondInnings}</p>
        <h1 className="innings-heading">Man Of The Match</h1>
        <p className="innings-details">{manOfTheMatch}</p>
        <h1 className="innings-heading">Umpires</h1>
        <p className="innings-details">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
