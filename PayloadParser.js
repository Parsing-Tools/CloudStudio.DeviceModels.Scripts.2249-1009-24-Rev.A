function parseUplink(device, payload) {
    var parsed = JSON.parse(payload.asString());
    env.log(parsed);
    

    if (parsed[0] && parsed[0].payload && parsed[0].payload.variables) {
        var variables = parsed[0].payload.variables;

        var e1 = device.endpoints.byAddress("1");
        var e2 = device.endpoints.byAddress("2"); //Nuevo
        var e3 = device.endpoints.byAddress("3"); //Nuevo
        var e4 = device.endpoints.byAddress("4"); //Nuevo
        var e5 = device.endpoints.byAddress("5"); //Nuevo
        var e6 = device.endpoints.byAddress("6"); //Nuevo
        var e7 = device.endpoints.byAddress("7"); //Nuevo
        

        if (variables[0] != null && e1 != null) {
            e1.updateTemperatureSensorStatus(variables[0].temperatureCelsius1); //Temperatura Acumulador ACS
            }
        if (variables[0] != null && e2 != null) {
            e2.updateTemperatureSensorStatus(variables[0].temperatureCelsius2); 
            }
        if (variables[0] != null && e3 != null) {
            e3.updateTemperatureSensorStatus(variables[0].temperatureCelsius3); 
            }
        if (variables[0] != null && e4 != null) {
            e4.updateTemperatureSensorStatus(variables[0].temperatureCelsius4); 
            }
        if (variables[0] != null && e5 != null) {
            e5.updateTemperatureSensorStatus(variables[0].temperatureCelsius5);
            }
        if (variables[0] != null && e6 != null) {
            e6.updateTemperatureSensorStatus(variables[0].temperatureCelsius6);
            }
        if (variables[0] != null && e7 != null) {
            e7.updateTemperatureSensorStatus(variables[0].temperatureCelsius7);
            }
        
    
    }

    if (parsed[0] && parsed[0].payload3 && parsed[0].payload3.variables) {
        var variables2 = parsed[0].payload3.variables;

        var e8 = device.endpoints.byAddress("8"); //Viene de Vestuario de Fútbol
        env.log(variables2[0]);
    
        if (variables2[0] != null && e8 != null) {
            e8.updateTemperatureSensorStatus(variables2[0].temperatureCelsius10);
            }

    }

    

}



function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}