pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo '🔧 Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo '🧪 Running tests...'
                sh 'npm test'
            }
        }
        stage('Code Quality Check') {
            steps {
                echo '🔍 Running ESLint...'
                sh 'npx eslint .'
            }
        }
        stage('Finish') {
            steps {
                echo '✅ Pipeline completed.'
            }
        }
    }
}
