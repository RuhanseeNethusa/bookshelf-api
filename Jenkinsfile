pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/RuhanseeNethusa/bookshelf-api.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Run') {
            steps {
                sh 'node app.js'
            }
        }
    }
}
