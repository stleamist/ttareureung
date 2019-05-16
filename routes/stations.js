// MARK: NPM 모듈
const express = require('express')
const ttareungyiRequest = require('../services/ttareungyiRequest')

// MARK: 로컬 모듈
const parser = require('../parsers')
const district = require('../constants/district')

// MARK: 라우터
const router = express.Router()

// MARK: GET /
router.get('/', function(req, res, next) {
	// MARK: 요청 변수
	let endpointPath = '/app/station/getStationRealtimeStatus.do'
	// district를 enum처럼 사용하여 행정구 이름을 해당하는 숫자 코드로 변환한다.
	// district에 해당 행정구 이름이 없거나 요청 쿼리에 행정구 이름이 없을 경우 서울 전체 행정구를 요청하는 기본값인 district.all을 사용한다.
	let parameters = {
		stationGrpSeq: district[req.query.district] || district.all
	}
	
	ttareungyiRequest.post({url: endpointPath, form: parameters}, function (error, response, body) {
		let stations = parser.parseStations(body)
		
		// stations는 배열이므로 이를 객체로 감싸준다.
		let result = {
			stations: stations
		}
		
		return res.json(result)
	})
})

module.exports = router