import {Link} from 'react-router-dom'

interface PaginationProps {
	totalPosts: number
	postsPerPage: number
	paginate: (pageNumber: number) => void
	currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({
	totalPosts,
	postsPerPage,
	paginate,
	currentPage,
}) => {
	// Calculate the total number of pages and create an array of page numbers
	const pageNumbers = []

	for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
		pageNumbers.push(index)
	}

	return (
		<div className='flex items-center justify-center mt-4'>
			<ul className='flex items-center justify-center list-none'>
				{pageNumbers.map((number) => (
					<li
						key={number}
						className={`mx-1 ${
							currentPage === number ? 'bg-blue-500' : 'bg-white'
						} rounded-md`}>
						<Link
							className={`px-4 py-2 transition-colors duration-200 text-blue-500 hover:text-white hover:bg-blue-600 ${
								currentPage === number ? 'text-white' : 'text-blue-500'
							}`}
							onClick={() => paginate(number)}
							to='#'>
							{number}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Pagination
