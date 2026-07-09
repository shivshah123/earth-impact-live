# Earth Impact Live

Earth Impact Live is a cloud-native environmental monitoring platform. It displays a rotating globe and allows users to select a country to view environmental indicators such as temperature, air quality, humidity, wind speed, wildfire/disaster information, and climate metrics.

## Technology Stack

- Node.js and Express
- MongoDB Atlas
- Azure App Service
- Terraform
- Jenkins CI/CD
- SonarQube
- Trivy
- Prometheus
- Grafana

## Local Setup

```bash
npm install
cp .env.example .env
npm start
```

Open:

```text
http://localhost:8080
```

Health endpoint:

```text
http://localhost:8080/health
```

Metrics endpoint:

```text
http://localhost:8080/metrics
```

## Terraform Deployment

```bash
cd terraform
terraform init
terraform validate
terraform plan
terraform apply
```

## Jenkins

Use:

```text
jenkins/Jenkinsfile-CI
jenkins/Jenkinsfile-CD
```

## Important

Replace placeholder values in `.env` and `terraform/terraform.tfvars.example` before production deployment.
