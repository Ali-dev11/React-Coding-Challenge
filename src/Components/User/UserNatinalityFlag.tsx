import ReactCountryFlag from 'react-country-flag'

interface UserNationalityFlagProps {
	nat: string
}

const UserNationalityFlag: React.FC<UserNationalityFlagProps> = ({nat}) => {
	return (
		<ReactCountryFlag
			countryCode={nat}
			svg
			style={{
				width: '1.2rem',
				height: '1.2rem',
			}}
			title={nat}
		/>
	)
}

export default UserNationalityFlag
