class FindCustomers {
    async appendHaversineDistances(arrayOfCustomers) {
        const latDublin = 53.339428;
        const lonDublin = -6.257664;
        const earthRadius = 6371e3;
        const radianMultiplier = Math.PI / 180;
        for (let customer of arrayOfCustomers) {
            let phi1 = (parseFloat(customer.latitude)) * radianMultiplier;
            let phi2 = (parseFloat(customer.longitude)) * radianMultiplier;
            let deltaPhi = (latDublin - (parseFloat(customer.latitude))) * radianMultiplier;
            let deltaLambda = (lonDublin - (parseFloat(customer.longitude))) * radianMultiplier;
            //Applying haversine formula
            let a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) * Math.cos(phi1) * Math.cos(phi2) *
                Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

            let c = Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            customer.haversineDistance = Math.ceil(earthRadius * c);
        }
        return arrayOfCustomers;
    }
}

module.exports = FindCustomers;