import './index.css'

const MatchCard = props => {
  const {teamItem, key} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = teamItem

  return (
    <li className="match-list-item">
      <div className="match-card-container">
        <img
          src={competingTeamLogo}
          className="opponent-team-img"
          alt={`competing team ${competingTeam}`}
        />
        <p className="opponent-team-name">{competingTeam}</p>
        <p className="match-result-details">{result}</p>
        <p className={`result ${matchStatus}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
