// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {cardsList: [], isLoad: true}

  componentDidMount() {
    this.getCardsList()
  }

  getCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedCardsList = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({cardsList: updatedCardsList, isLoad: false})
  }

  homeIconRendering = () => (
    <div className="cricket_logo_container">
      <img
        className="h-100 mr-3"
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
      />
      <h1>IPL Dashboard</h1>
    </div>
  )

  homeCardsRendering = () => {
    const {cardsList} = this.state
    // const {name, teamImageUrl} = cardsList
    return (
      <ul className="list-unstyled cardsList_container mt-3">
        {cardsList.map(each => (
          <li key={each.id} className="list_item mt-3">
            <TeamCard teamCards={each} />
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {isLoad} = this.state
    // const {name, teamImageUrl} = cardsList
    return (
      <div className="Home_container">
        <div className="main_container mt-5 mb-5">
          {isLoad ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader" className="text-center">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <>
              {this.homeIconRendering()}
              {this.homeCardsRendering()}
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
