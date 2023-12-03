import {Link} from 'react-router-dom'
import {
	FaCalendarTimes,
	FaEnvelopeOpen,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaUserCircle,
} from 'react-icons/fa'

import {DateFormat, FormatPhone} from '../../utils/format'

interface CardProps {
	item: {
		picture: {large: string}
		name: {first: string; last: string}
		login: {uuid: string; password: string}
		email: string
		dob: {date: string}
		location: {
			city: string
			state: string
			postcode: string
			coordinates: {latitude: string; longitude: string}
		}
		phone: string
		nat: string
	}
}

const Card: React.FC<CardProps> = ({item}) => {
	const fullName = `${item.name.first} ${item.name.last}`
	const location = `${item.location.city}, ${item.location.state} - ${item.location.postcode}`

	return (
		<div className='flex items-center justify-center my-4'>
			<div className='flex flex-col items-center p-8 bg-gray-200 rounded-3xl w-80 h-120'>
				<Link
					to={`/user/${item.login.uuid}`}
					state={{item}}>
					<img
						className='w-48 h-48 rounded-xl mb-6'
						src={item.picture.large}
						alt={fullName}
					/>
					<p className='flex items-center'>
						<FaUserCircle className='soc-icon' />
						<span className='ml-2 text-2xl font-bold'>{fullName}</span>
					</p>
					<p className='flex items-center'>
						<FaEnvelopeOpen className='soc-icon' />
						<span className='ml-2'>{item.email}</span>
					</p>
					<p className='flex items-center'>
						<FaCalendarTimes className='soc-icon' />
						<span className='ml-2'>{DateFormat(item.dob.date)}</span>
					</p>
					<p className='flex items-center'>
						<FaMapMarkerAlt className='soc-icon' />
						<span className='ml-2'>{location}</span>
					</p>
					<p className='flex items-center'>
						<FaPhoneAlt className='soc-icon' />
						<span className='ml-2'>{FormatPhone(item.phone)}</span>
					</p>
				</Link>
			</div>
		</div>
	)
}

export default Card
