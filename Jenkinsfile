pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building"
                dir('client'){
                   sh "npm install"
                   sh "npm build"
                }
                echo "Done Building"
            }
        }
    }
}
