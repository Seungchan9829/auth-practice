export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  roots: ['<rootDir>'], // 현재 디렉토리를 루트로 지정
  testMatch: ['**/*.test.js', '**/*.spec.js'], // 테스트 파일 패턴
  testPathIgnorePatterns: [
    '/node_modules/', // node_modules 제외
    '<rootDir>/../src/', // src 디렉토리 제외
  ],
};
