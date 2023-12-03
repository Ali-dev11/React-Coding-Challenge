import {useState, useEffect, lazy} from 'react'
import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {
	FaCalendarTimes,
	FaEnvelope,
	FaLock,
	FaMapMarkerAlt,
	FaPhone,
} from 'react-icons/fa'

import {DateFormat} from '../../utils/format'
const UserNationalityFlag = lazy(() => import('./UserNatinalityFlag'))
const UserLocation = lazy(() => import('./UserLocation'))

const UserProfile = () => {
	const locationState = useLocation().state //get state from card
	const [userInfo, setUserInfo] = useState<string>('')

	useEffect(() => {
		if (locationState && locationState.item) {
			const {item} = locationState
			setUserInfo(`${item.name.first} ${item.name.last}`)
		}
	}, [locationState])

	if (!locationState || !locationState.item) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<span className='text-xl text-gray-600'>Loading...</span>
			</div>
		)
	}

	const {item} = locationState

	const handleHover = (data: string) => {
		setUserInfo(data)
	}

	const handleMouseLeave = () => {
		setUserInfo(`${item.name.first} ${item.name.last}`)
	}

	return (
		<div className='flex justify-center items-center h-screen bg-gray-100'>
			<div className='flex flex-col items-center p-6 bg-white shadow-xl rounded-2xl max-w-md w-full'>
				<img
					className='w-24 h-24 rounded-full mx-auto'
					src={item.picture.large}
					alt={`${item.name.first} ${item.name.last}`}
				/>
				<h2 className='mt-4 text-lg font-semibold'>Hi, My name is</h2>
				<h1 className='text-2xl font-bold'>{userInfo}</h1>
				<div className='flex justify-around mt-4 text-gray-600 space-x-4'>
					<FaPhone
						className='hover:text-green-500 cursor-pointer'
						onMouseEnter={() => handleHover(item.phone)}
						onMouseLeave={handleMouseLeave}
					/>
					<FaEnvelope
						className='hover:text-blue-500 cursor-pointer'
						onMouseEnter={() => handleHover(item.email)}
						onMouseLeave={handleMouseLeave}
					/>
					<FaMapMarkerAlt
						className='hover:text-red-500 cursor-pointer'
						onMouseEnter={() =>
							handleHover(`${item.location.city}, ${item.location.state}`)
						}
						onMouseLeave={handleMouseLeave}
					/>
					<FaCalendarTimes
						className='hover:text-red-500 cursor-pointer'
						onMouseEnter={() => handleHover(`${DateFormat(item.dob.date)}`)}
						onMouseLeave={handleMouseLeave}
					/>
					<FaLock
						className='hover:text-yellow-500 cursor-pointer'
						onMouseEnter={() => handleHover(`${item.login.password}`)}
						onMouseLeave={handleMouseLeave}
					/>
					<UserNationalityFlag nat={item.nat} />
				</div>
				<UserLocation coordinates={item.location.coordinates} />
				<Link
					to='/'
					className='mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Go Back
				</Link>
			</div>
		</div>
	)
}

export default UserProfile
