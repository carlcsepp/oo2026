class Battery {
    private maxCapacity: number;
    private chargeLevel: number;
    private chargerPower: number = 50;
    private joulesPerMah: number = 3.6;

    constructor(maxCapacity: number, chargeLevel: number) {
        this.maxCapacity = maxCapacity;
        this.chargeLevel = chargeLevel;
    }

    getChargePercentage(): number {
        return (this.chargeLevel / this.maxCapacity) * 100;
    }

    charge(seconds: number): string {
        const joulesDelivered = this.chargerPower * seconds;
        const mahGained = joulesDelivered / this.joulesPerMah;
        this.chargeLevel += mahGained;

        if (this.chargeLevel > this.maxCapacity) {
            this.chargeLevel = this.maxCapacity;
            return "overcharged";
        }

        if (this.chargeLevel <= 0) {
            return "empty";
        }

        return "ok";
    }

    getChargeLevel(): number {
        return this.chargeLevel;
    }
}