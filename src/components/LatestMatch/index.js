// Write your code here
import './index.css'

const LatestMatch = props => {
  const {teamMatchList} = props
  const {latestMatchDetails} = teamMatchList
  const {
    competingTeam,
    //   matchStatus,
    result,
    umpires,
    manOfTheMatch,
    venue,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    date,
  } = latestMatchDetails
  console.log(result)
  return (
    <div className="latest_match_details_container p-4">
      <div className="team_details_width">
        <p className="font_size h1">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="image_width text-center">
        <img
          src={competingTeamLogo}
          alt={`"latest match ${competingTeam}`}
          className="w-75"
        />
      </div>
      <div className="text_width">
        <p className="h5">First Innings</p>
        <p>{firstInnings}</p>
        <p className="h5">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="h5">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="h5">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
