pipeline {
    agent any

    options {
        skipDefaultCheckout()
      }

  stages {
    stage('Checkout source code') {
      steps {
        git branch: 'main',
            url: 'https://github.com/PanJr0109/DevOps.git'
        sh "ls -la"
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
