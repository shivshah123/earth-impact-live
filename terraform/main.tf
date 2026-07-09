provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-earth-impact-live"
  location = var.location
}

resource "azurerm_service_plan" "plan" {
  name                = "asp-earth-impact-live"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  os_type             = "Linux"
  sku_name            = var.app_service_sku
}

resource "azurerm_linux_web_app" "webapp" {
  name                = "earth-impact-live-${var.unique_suffix}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  service_plan_id     = azurerm_service_plan.plan.id
  https_only          = true

  site_config {
    always_on = var.always_on

    application_stack {
      node_version = "20-lts"
    }
  }

  app_settings = {
    "MONGO_URI" = var.mongo_uri
    "PORT"      = "8080"
  }
}
