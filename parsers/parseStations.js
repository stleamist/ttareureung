// MARK: 로컬 모듈
const helpers = require('./helpers')

function parseStations(jsonString) {
	let json = JSON.parse(jsonString)
	
	let stations = json.realtimeList.map(function (item) {
		// station으로 반환할 객체를 생성한다.
		// 추가적인 연산이 필요한 값은 일단 undefined로 초기화한다.
		let station = {
			id: item.stationId,
			number: undefined,
			name: undefined,
			location: {
				latitude: Number(item.stationLatitude),
				longitude: Number(item.stationLongitude)
			},
			isAvailable: helpers.parseBoolean(item.stationUseYn),
			docksCount: Number(item.rackTotCnt),
			bikesCount: Number(item.parkingBikeTotCnt)
		}
		
		// 대여소 번호와 이름이 담긴 문자열에서 번호와 이름을 분리해 station 객체에 넣는다.
		let fullNameComponents = helpers.parseStationFullName(item.stationName)
		station.number = fullNameComponents.number
		station.name = fullNameComponents.name
		
		return station
	})
	
	// 대여소 리스트를 대여소 번호 기준 오름차순으로 정렬한다.
	stations = stations.sort((s1, s2) => s1.number - s2.number)
	
	return stations
}

module.exports = parseStations