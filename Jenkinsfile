pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building"
                dir('client'){
                   sh "ls"
                   sh "npm install"
                   sh "npm run build"
                }
                echo "Done Building"
            }
        }
    }
}
