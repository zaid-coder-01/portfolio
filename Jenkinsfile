pipeline {
    agent any
    
    tools {
    // Define Node.js tool with a specific installation from Global Tool Configuration
    nodejs "zaid"
  }

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
