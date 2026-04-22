pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/vtate-812/jenkin-prac.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t tate2003/backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t tate2003/frontend ./frontend'
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push tate2003/backend'
                sh 'docker push tate2003/frontend'
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}