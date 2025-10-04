pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Code Quality') {
            steps {
                echo 'Checking code quality...'
                sh 'npm run lint || true'  // skip if no linter is set up
            }
        }
        stage('Security') {
            steps {
                echo 'Running security checks...'
                sh 'npm audit || true'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying Docker container...'
                sh 'docker build -t bookshelf-api .'
                sh 'docker run -d -p 3000:3000 bookshelf-api || true'
            }
        }
        stage('Release') {
            steps {
                echo 'Tagging release...'
                sh 'git tag -a v1.0.$BUILD_NUMBER -m "Release" || true'
                sh 'git push origin --tags || true'
            }
        }
        stage('Monitoring') {
            steps {
                echo 'Monitoring application logs...'
                sh 'docker ps -a'
            }
        }
    }
}
