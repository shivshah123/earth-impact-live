variable "subscription_id" {
  description = "Azure Subscription ID"
  type        = string
}

variable "mongo_uri" {
  description = "MongoDB Atlas connection string"
  type        = string
  sensitive   = true
}

variable "unique_suffix" {
  description = "Unique suffix for Azure Web App name"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "Australia East"
}

variable "app_service_sku" {
  description = "Azure App Service Plan SKU"
  type        = string
  default     = "B1"
}

variable "always_on" {
  description = "Enable Always On. Use false for free tier."
  type        = bool
  default     = true
}
