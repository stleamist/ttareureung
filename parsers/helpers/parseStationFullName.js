function parseStationFullName(fullName) {
	let fullNameComponents = {
		number: undefined,
		name: undefined
	}
	
	// 첫 번째 온점을 기준으로 둘로 나눈다.
	let splittedString = fullName.split(/\.(.+)/).map(x => x.trim())
	
	if (splittedString.length == 1) {
		let isNumber = !isNaN(Number(splittedString[0]))
		if (isNumber) {
			fullNameComponents.number = Number(splittedString[0])
			fullNameComponents.name = null
		} else {
			fullNameComponents.number = null
			fullNameComponents.name = splittedString[0]
		}
	} else {
		fullNameComponents.number = Number(splittedString[0])
		fullNameComponents.name = splittedString[1]
	}
	
	return fullNameComponents
}

module.exports = parseStationFullName