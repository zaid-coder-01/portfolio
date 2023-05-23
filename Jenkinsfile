pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/zaid-coder-01/portfolio.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('run') {
            steps {
                sh 'npm start'
            }
        }
    }
}
