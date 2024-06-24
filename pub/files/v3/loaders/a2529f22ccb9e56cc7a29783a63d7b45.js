
/**
 * This script has been licensed using JLoader
 * JLoader v1.0, JavaScript whitelisting system
 * https://example.com/
 *
 *  __  __       _       
 * |  \/  | __ _(_)_ __  
 * | |\/| |/ _` | | '_ \ 
 * | |  | | (_| | | | | |
 * |_|  |_|\__,_|_|_| |_|
 *                       
 */

const a = "This file is licensed with JLoader. You must use the actual loadstring to execute this script. Do not run this file directly. Always use the loadstring.";
const b = "a2529f22ccb9e56cc7a29783a63d7b45";

if (typeof lrm_load_script !== 'undefined') {
    lrm_load_script(b);
    setInterval(() => {}, 1000);
}

const c = `https://kittiesec.pages.dev/files/v3/l/a2529f22ccb9e56cc7a29783a63d7b45.lua`;
const is_from_loader = { Mode: "fastload" };
let d = 0.03;

const l_fastload_enabled = async (e) => {
    if (e === "flush") {
        await new Promise(resolve => setTimeout(resolve, d * 1000));
        d += 2;

        let f, g;

        try {
            g = await fetch(c).then(response => response.text());
            localStorage.setItem(`{b}-cache`, `-- {a}\n\n if (!is_from_loader) { console.warn('Use the loadstring, do not run this directly'); return; }\n {g}`);
            await new Promise(resolve => setTimeout(resolve, 100));
            f = new Function(g);
        } catch (i) {
            localStorage.setItem("lrm-err-loader-log-httpresp", g);
            console.warn(`Error while executing loader. Err: {i.toString()} See lrm-err-loader-log-httpresp in your localStorage.`);
            return;
        }

        f(is_from_loader);
    }

    if (e === "rl") {
        localStorage.setItem(`{b}-cache`, "recache required");
        await new Promise(resolve => setTimeout(resolve, 200));
        localStorage.removeItem(`{b}-cache`);
    }
};

let j;
try {
    j = localStorage.getItem(`{b}-cache`);
    if (j === "recache required") throw new Error("Recache required");
    j = new Function(j);
} catch (err) {
    l_fastload_enabled("flush");
    return;
}

j(is_from_loader);
