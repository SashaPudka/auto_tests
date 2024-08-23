// let data = {name: 'Маг', health: 90};
export default function statusPlayer(data) {
        if (data.health > 50) {
            return 'healthy';
        }; 
        if (data.health > 15) {
            return 'wounded';
        }
            return 'critical'
}
