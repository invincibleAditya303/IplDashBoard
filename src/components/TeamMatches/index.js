import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatch: {},
    opponentTeamsList: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchesdata()
  }

  getMatchesdata = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    console.log(response)
    const matchesData = await response.json()
    console.log(matchesData)

    const latestMatchDetails = matchesData.latest_match_details
    const activeTeamBannerUrl = matchesData.team_banner_url
    const recentMatches = matchesData.recent_matches

    const updatedLatestMatchData = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatches = recentMatches.map(eachRecentMatch => ({
      umpires: eachRecentMatch.umpires,
      result: eachRecentMatch.result,
      manOfTheMatch: eachRecentMatch.man_of_the_match,
      id: eachRecentMatch.id,
      date: eachRecentMatch.date,
      venue: eachRecentMatch.venue,
      competingTeam: eachRecentMatch.competing_team,
      competingTeamLogo: eachRecentMatch.competing_team_logo,
      firstInnings: eachRecentMatch.first_innings,
      secondInnings: eachRecentMatch.second_innings,
      matchStatus: eachRecentMatch.match_status,
    }))

    this.setState({
      latestMatch: updatedLatestMatchData,
      opponentTeamsList: updatedRecentMatches,
      teamBannerUrl: activeTeamBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {latestMatch, opponentTeamsList, teamBannerUrl, isLoading} =
      this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div>
        {isLoading ? (
          <div testid="loader" className="spinner">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className={`team-matches-bg-container ${id}`}>
            <img
              src={teamBannerUrl}
              className="team-banner-img"
              alt="team banner"
            />
            <h1 className="latest-match-heading">Latest Matches</h1>
            <LatestMatch matchDetails={latestMatch} />
            <ul className="opponent-matches-list-container">
              {opponentTeamsList.map(eachTeam => (
                <MatchCard teamItem={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
