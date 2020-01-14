function FindProxyForURL(url, host){
	var exceptions = new Array(
        // Local IP Addresses (ie. 10.0.0.1 - 10.255.255.254)
        /^10\.\d+\.\d+\.\d+$/,
    );
    for (i = 0; i < exceptions.length; i++) // Iterate through each exception
    {
        if (exceptions[i].test(host)) // Test regex query against hostname
        {
            return "DIRECT"; // Bypass the proxy
        }
    }
	return "PROXY 10.28.160.73:8080";
}