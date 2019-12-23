pipeline {
    agent any

    stages {

        stage('Deploy production') {
            when {
                branch 'master'
            }
            steps {
                build job: 'DEPLOY.dashboard-fe.production'
            }
        }

        stage('Deploy staging') {
            when {
                branch 'staging'
            }
            steps {
                build job: 'DEPLOY.dashboard-fe.staging'
            }
        }
    }
}
