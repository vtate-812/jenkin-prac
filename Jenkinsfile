pipeline {
    agent any

    stages {

        stage('Build Backend') {
            steps {
                sh 'docker build -t tate2003/backend ./jenkin-prac/Backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t tate2003/frontend:v5 ./jenkin-prac/Frontend'
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push tate2003/backend'
                sh 'docker push tate2003/frontend:v5'
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f jenkin-prac/K8s/'
            }
        }
    }
    environment {
    KUBECONFIG = '/var/lib/jenkins/.kube/config'
}
}