// 48. Rotate Image

const rotate = matrix => {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i; j < matrix[0].length; j++) {
			;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
		}
	}

	for (let matrix1 of matrix) {
		matrix1.reverse()
	}
}
