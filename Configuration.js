function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  
  endpoints.addEndpoint("1", "Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temperatura Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temperatura Acumulador Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Consigna ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "Consigna Caldera", endpointType.temperatureSensor);
  
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}