pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm --version'
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm test'

            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
