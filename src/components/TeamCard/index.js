// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCards} = this.props
    const {name, teamImageUrl, id} = teamCards
    return (
      <Link to={`/team-matches/${id}`} className="Link">
        <div className="main_card_item p-2">
          <img src={teamImageUrl} alt={name} className="card_image mr-3" />
          <p className="card_item_heading">{name}</p>
        </div>
      </Link>
    )
  }
}

export default TeamCard
