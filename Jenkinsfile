pipeline {
    agent any

    stages {

        stage('Build Backend') {
            steps {
                sh 'docker build -t tate2003/backend .'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t tate2003/frontend .'
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