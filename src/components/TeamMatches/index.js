// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchList: {}, isLoader: true, recentMatchesList: []}

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedTeamMatch = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches,
    }
    const {recentMatches} = updatedTeamMatch
    const updatedRecentMatchesList = recentMatches.map(each => ({
      id: each.id,
      result: each.result,
      competingTeamLogo: each.competing_team_logo,
      competingTeam: each.competing_team,
      matchStatus: each.match_status,
    }))
    console.log(updatedTeamMatch)
    this.setState({
      teamMatchList: updatedTeamMatch,
      isLoader: false,
      recentMatchesList: updatedRecentMatchesList,
    })
  }

  render() {
    const {teamMatchList, isLoader, recentMatchesList} = this.state
    const {teamBannerUrl} = teamMatchList
    return (
      <div className="team_match_bg_container">
        <div className="team_match_main_container mt-5 mb-5">
          {isLoader ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader" className="text-center">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="mb-3 w-100"
              />
              <p className="h4 text-light">Latest Matches</p>
              <LatestMatch teamMatchList={teamMatchList} />
              <ul className="list-unstyled match_card_container">
                {recentMatchesList.map(each => (
                  <li key={each.id} className="match_card_item mt-4">
                    <MatchCard matchCardDetails={each} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
