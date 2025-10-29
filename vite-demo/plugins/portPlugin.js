export default function portPlugin() {
    return {
        name: 'port-plugin',
        config: () =>({
            server: {
                port: 2345
            }
        })
    }
}