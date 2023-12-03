import GoogleMapReact from 'google-map-react'
import {FaMapMarkerAlt} from 'react-icons/fa'

interface AnyReactComponentProps {
	lat: number
	lng: number
	text: React.ReactNode
}

const UserLocationData: React.FC<AnyReactComponentProps> = ({text}) => (
	<div>{text}</div>
)

interface UserLocationProps {
	coordinates: {
		latitude: string
		longitude: string
	}
}

const UserLocation: React.FC<UserLocationProps> = ({coordinates}) => {
	const center = {
		lat: parseFloat(coordinates.latitude),
		lng: parseFloat(coordinates.longitude),
	}

	const zoom = 11

	return (
		<div style={{height: '400px', width: '100%'}}>
			<GoogleMapReact
				bootstrapURLKeys={{key: 'GOOGLE_MAPS_API_KEY'}}
				defaultCenter={center}
				defaultZoom={zoom}>
				<UserLocationData
					lat={center.lat}
					lng={center.lng}
					text={<FaMapMarkerAlt className='text-2xl text-red-500' />}
				/>
			</GoogleMapReact>
		</div>
	)
}

export default UserLocation
