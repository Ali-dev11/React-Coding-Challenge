interface SearchProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({onChange}) => {
	return (
		<div className='flex justify-center my-4 px-4 md:px-0'>
			<input
				className='w-2/3 outline-none p-3 text-base rounded-lg bg-white border border-gray-300 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200 ease-in-out'
				type='text'
				placeholder='Search name here...'
				onChange={onChange}
			/>
		</div>
	)
}

export default Search
