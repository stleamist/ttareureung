'use strict'

// MARK: NPM 모듈
const express = require('express')

// MARK: 로컬 모듈
const config = require('./constants/config')

// MARK: 라우터
const stationsRouter = require('./routes/stations')

const app = express()


// 중첩된 요청 본문 객체를 확장형으로 파싱하는 body-parser를 사용한다.
app.use(express.urlencoded({ extended: true }))
// 응답 헤더에서 'X-Powered-By=Express'를 제거한다.
app.disable('x-powered-by')
// 응답으로 전송할 JSON의 들여쓰기 간격을 2 스페이스로 설정한다.
app.set('json spaces', 2)


// MARK: 라우터 설정
app.use('/stations', stationsRouter)

// MARK: 모듈 내보내기
module.exports = app

// MARK: 서버 실행
if (!process.env.GCLOUD_PROJECT && !process.env.GCP_PROJECT) {
	app.listen(config.port, () => {
		console.log(`Ttareureung running on port ${config.port}`)
	})
}