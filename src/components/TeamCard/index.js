import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCard, key} = props
  const {name, id, teamImageUrl} = teamCard
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-list-card-container">
        <img src={teamImageUrl} className="team-logo-img " alt={`${name}`} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
