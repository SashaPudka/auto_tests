export default function statusPlayer({name, health}) {
        if (health > 50) {
            return 'healthy';
        }; 
        if (health > 15) {
            return 'wounded';
        }
            return 'critical'
}
