// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    result,
    competingTeamLogo,
    competingTeam,
    matchStatus,
  } = matchCardDetails

  const addClass = matchStatus === 'Lost' ? 'text-danger' : 'text-success'
  return (
    <div className="p-4 text-center card_item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="w-50"
      />
      <p className="card_heading">{competingTeam}</p>
      <p>{result}</p>
      <p className={`h4 ${addClass}`}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
