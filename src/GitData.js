import React from 'react'
import { NavLink } from 'react-router-dom'

const Box = ( props ) => {
	console.log('props',props.repos_url)
	return props.title === 'Public Repos' ? 
	<NavLink to={{
		pathname:`/repos/${props.id}`,
		repolink: props.repos_url,
		owner: props.login
	}}>
		<div className={props.type}>
			<p>{props.title}</p>
			<span>{props.value ? props.value : '-'}</span>
		</div>
	</NavLink> : 
	<div className={props.type}>
		<p>{props.title}</p>
		<span>{props.value ? props.value : '-'}</span>
	</div>
}


export default class GitData extends React.Component {	
	render() {
		const {
			login,
			id,
			avatar_url,
			public_repos,
			public_gists,
			followers,
			following,
			name,
			email,
			bio,
			repos_url
		} = this.props.data
		return (
			<div className='gitData'>
				<div className="row">
					<img alt='' url={avatar_url} className="avatar"/>
					<Box 
						type="numb"
						title='Followers' 
						value={followers} 
					/>
					<Box 
						type="numb"
						title='Following' 
						value={following} 
					/>
					<Box 
						type="numb"
						title='Public Repos' 
						value={public_repos}
						repos_url={repos_url}
						id={id}
						login={login}
						/>
					<Box 
						type="numb"
						title='Gists' 
						value={public_gists} 
					/>
				</div>
				<div>
					<Box 
						type="text"
						title='Login' 
						value={login} 
					/>
					<Box 
						type="text"
						title='id' 
						value={id} 
					/>
					<Box 
						type="text"
						title='Name' 
						value={name} 
					/>
					<Box 
						type="text"
						title='Email' 
						value={email} 
					/>
					<Box 
						type="text"
						title='Bio' 
						value={bio} 
					/>
				</div>	
			</div>
		)
	}
}