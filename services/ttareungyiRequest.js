// MARK: NPM 모듈
const request = require('request')

// MARK: 로컬 모듈
const config = require('../constants/config')

// 경로만으로 request 호출이 가능하도록 baseUrl을 담은 request 인스턴스를 생성한다.
const ttareungyiRequest = request.defaults({
	baseUrl: config.baseURL
})

module.exports = ttareungyiRequest