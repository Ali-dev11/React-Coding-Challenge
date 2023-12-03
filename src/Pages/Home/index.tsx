import {useState, useEffect, useCallback, lazy} from 'react'
import axios from 'axios'

const Card = lazy(() => import('../../Components/Card'))
const Search = lazy(() => import('../../Components/Search'))
const Pagination = lazy(() => import('../../Components/Pagination'))
const GenderFilter = lazy(() => import('../../Components/Filters'))

interface UserData {
	picture: {large: string}
	name: {first: string; last: string}
	login: {
		username: string
		uuid: string
		password: string
	}
	email: string
	dob: {date: string}
	location: {
		city: string
		state: string
		postcode: string
		coordinates: {latitude: string; longitude: string}
	}
	phone: string
	gender: string
	nat: string
}

const Home = () => {
	const [data, setData] = useState<UserData[]>([])
	const [filteredData, setFilteredData] = useState<UserData[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(10)
	const [selectedGender, setSelectedGender] = useState('')
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('api/?results=100')
				setData(response.data.results)
			} catch (error) {
				console.error('Error fetching data: ', error)
			}
		}

		fetchData()
	}, [])

	// Apply filters whenever data, searchTerm or selectedGender changes
	useEffect(() => {
		const filtered = data.filter((item) => {
			return (
				(selectedGender ? item.gender.toLowerCase() === selectedGender : true) &&
				(item.name.first.toLowerCase().includes(searchTerm) ||
					item.name.last.toLowerCase().includes(searchTerm))
			)
		})

		setFilteredData(filtered)
	}, [data, searchTerm, selectedGender])

	const handleSearchInput = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSearchTerm(event.target.value.toLowerCase())
		},
		[]
	)

	const handleFilter = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			setSelectedGender(event.target.value.toLowerCase())
		},
		[]
	)

	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage

	// Page change handler
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

	return (
		<div>
			<header className='flex items-center flex-col justify-center w-full mx-auto max-w-7xl text-center'>
				<h1 className='text-7xl text-bold'>React Coding Challenge</h1>
			</header>
			<Search onChange={handleSearchInput} />
			<GenderFilter
				onChange={handleFilter}
				selectedValue={selectedGender}
			/>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{filteredData.slice(indexOfFirstPost, indexOfLastPost).map((item) => (
					<Card
						key={item.login.username}
						item={item}
					/>
				))}
			</div>
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={filteredData.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</div>
	)
}

export default Home
