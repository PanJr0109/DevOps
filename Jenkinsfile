pipeline {
    environment {
        registry = "panjr0109/dockerwebapp"
        registryCredential = '51a6f422-bead-4b21-bea3-56c903355cef'
        dockerImage = ''
    }
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                checkout scm
            }
        }
        
        stage('Building our image') {
            steps{
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }    
        }

        
    }
}
