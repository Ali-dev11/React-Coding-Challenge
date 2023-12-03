const GenderFilter = (props: {
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
	selectedValue: string
}) => {
	return (
		<div className='flex items-center justify-center py-3'>
			<label
				htmlFor='genderFilter'
				className='mr-3 font-semibold text-lg text-gray-700'>
				Gender:
			</label>
			<select
				id='genderFilter'
				value={props.selectedValue}
				onChange={props.onChange}
				className='block w-40 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'>
				<option value=''>All</option>
				<option value='male'>Male</option>
				<option value='female'>Female</option>
			</select>
		</div>
	)
}

export default GenderFilter
