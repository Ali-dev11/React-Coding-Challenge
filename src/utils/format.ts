// Functions to Format Date and phone
export const DateFormat = (date: string) => {
	const [year, month, day] = date.split('-')
	return `${day.slice(0, 2)}/${month}/${year}`
}

export const FormatPhone = (phone: string) => {
	return phone.replaceAll('-', '')
}
