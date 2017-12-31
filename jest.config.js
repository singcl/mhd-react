module.exports = {
    verbose: true,
    collectCoverage: true,
    "collectCoverageFrom": [
        // "**/*.{js}",  // 要测试的文件
        "*.js",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!coverage"
    ],
    coverageDirectory: "coverage"
}
