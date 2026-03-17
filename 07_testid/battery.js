var Battery = /** @class */ (function () {
    function Battery(maxCapacity, chargeLevel) {
        this.chargerPower = 50;
        this.joulesPerMah = 3.6;
        this.maxCapacity = maxCapacity;
        this.chargeLevel = chargeLevel;
    }
    Battery.prototype.getChargePercentage = function () {
        return (this.chargeLevel / this.maxCapacity) * 100;
    };
    Battery.prototype.charge = function (seconds) {
        var joulesDelivered = this.chargerPower * seconds;
        var mahGained = joulesDelivered / this.joulesPerMah;
        this.chargeLevel += mahGained;
        if (this.chargeLevel > this.maxCapacity) {
            this.chargeLevel = this.maxCapacity;
            return "overcharged";
        }
        if (this.chargeLevel <= 0) {
            return "empty";
        }
        return "ok";
    };
    Battery.prototype.getChargeLevel = function () {
        return this.chargeLevel;
    };
    return Battery;
}());
