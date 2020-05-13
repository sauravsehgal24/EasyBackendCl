pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building"
                cd client
                npm install
                npm build
                echo "Done Building"
            }
        }
    }
}
