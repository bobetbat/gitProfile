import React from 'react'
import Header from '../components/Header'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import btn from '../backbtn.png'


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
		try {
			const reposRaw = await axios.get(`${this.props.location.repolink}`)
			.then((res) => {
				return res.data
			})
			this.setState({repos: reposRaw})

		} catch(err) {
			console.log(err)
		}
	}
	render() {
		return (
			<div className='main'>
				<Header />
				<div className='container'>
					<div className='title'>
						<NavLink to='/'>
							<img 
							src={btn} 
							height="20px"
							alt=""/>
						</NavLink>
						<div className='titleName'>{this.props.location.owner}</div>
					</div>
					<div className='listItem bgc'>
						<div className='listItem-id'>id</div>
						<div className='listItem-name'>Name</div>
						<div className='listItem-size'>Size</div>
						<div className='listItem-url'>Link</div>
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