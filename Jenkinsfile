pipeline {
  agent {label any}

  stages {
    stage('check version') {
      steps {
        sh "node --version"
        sh "npm --version"
      }
    }
  }
}
