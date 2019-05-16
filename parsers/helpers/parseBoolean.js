function parseBoolean(booleanString) {
    let trueLiterals = ['y']
    let falseLiterals = ['n']

	if (trueLiterals.includes(booleanString.toLowerCase())) {
        return true
    } else if (falseLiterals.includes(booleanString.toLowerCase())) {
        return false
    } else {
        // 리터럴 배열에 포함되지 않은 문자열의 경우 undefined를 반환한다.
        return undefined
    }
}

module.exports = parseBoolean