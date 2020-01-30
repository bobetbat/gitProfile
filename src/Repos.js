import React from 'react'
import Header from './Header'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
// import style from './scss/style.scss'


export default class Repos extends React.Component {
	constructor() {
		super()
		this.state = {
			repos: []
		}
	}
	componentDidMount() {
		this.fetchData()
	}
	
	fetchData = async () => {
		console.log('repos',this.props.location.repolink)
		try {
			const reposRaw = await axios.get(`${this.props.location.repolink}`)
			.then((res) => {
				return res.data
			})
			this.setState({repos: reposRaw})

		} catch(err) {
			console.log(err)
		}

		console.log('wtf1',this.state.repos)
		// console.log('wtf22',this.state.profile)
	}
	// console.log('repos list', repos)
	render() {
		return (
			<div className='main'>
				<Header />
				<div className='container'>
					<div className='row'>
						<NavLink to='/'>
							<div>back</div>
						</NavLink>
						<div className='titleName'>{this.props.location.owner}</div>
					</div>
					{this.state.repos.map((repo) => (
						<div key={repo.id} className='listItem'>
							<div className='listItem-id'>{repo.id}</div>
							<div className='listItem-name'>{repo.name}</div>
							<div className='listItem-size'>{repo.size}</div>
							<Link className='listItem-url' to={repo.html_url}>
								<div >{repo.html_url}</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		)
	}
}