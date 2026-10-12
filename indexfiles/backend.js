export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const corsHeaders = {
            "Access-Control-Allow-Origin": "https://kpoovakan.github.io",
            "Access-Control-Allow-Origin": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type,"
        }
        if (request.method === "OPTIONS") {
            return new Reponse(null, { status: 204, headers: {
                "Access-Control-Allow-Origin": "https://kpoovakan.github.io",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            } });
        }

        if (request.method === "GET") {
            const target = url.searchParams.get("target");
            if (!(check(target))) return new Response("Invalid URL");
            // fancy code here
        }
        function check(thing) {
            return URL.canParse(thing);
        }
    }
}