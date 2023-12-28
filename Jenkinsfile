pipeline {
    agent any

    options {
        skipDefaultCheckout()
      }

  stages {
    stage('Checkout source code') {
      steps {
        git branch: 'master',
            credentialsId: 'jenkins_github_pac',
            url: 'https://github.com/PanJr0109/DevOps.git'
        sh "ls -la"
      }
    }

    stage ('Install dependencies') {
      tools {
        nodejs 'nodejs'
      }
      steps {
        sh '''
          echo "Installing..."
          npm install
          echo "Install dependencies successfully."
          ls -al
        '''
      }
    }

    stage ('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'nodejs') {
          sh 'echo "Build application..."'
          sh 'npm run build'
          sh 'echo "Build application successfully."'
          sh 'ls -al'
        }
        script {
          stash includes: 'build/', name: 'build'
        }
      }
    }

        
    }
}
