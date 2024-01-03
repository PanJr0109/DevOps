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

    stage('build and push') {
      steps {
           withDockerRegistry(credentialsId: 'Dockerhub', url: 'https://index.docker.io/v1/') {
               bat 'docker build -t panjr0109/mmtnc-project-03 .'
               bat 'docker push panjr0109/mmtnc-project-03 ' 
        }
      }
    }  
   

        
    }
}
