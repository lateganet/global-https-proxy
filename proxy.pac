function FindProxyForURL(url, host) {
    // Convert domain name to lowercase
    host = host.toLowerCase();

    // 1. Block specific domains (Replace/add your target domains here)
    if (
        dnsDomainIs(host, "instagram.com") ||
        dnsDomainIs(host, ".example.com") ||
        dnsDomainIs(host, "doubleclick.net") ||
        shExpMatch(host, "*.ads.*")
    ) {
        // Drop connection by sending to a dead local port
        return "PROXY 127.0.0.1:0";
    }

    // 2. Allow everything else to connect directly
    return "DIRECT";
}
