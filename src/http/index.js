// export const host = "http://192.168.1.162:80";
// export const host = "http://192.168.1.162:80";
export const host = "http://192.168.15.143:80";
// export const host = `http://${window.location.host}:80`;

export function sendWifi(route, ssid, password) {
	return fetch(`${host}${route}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: `ssid=${ssid}&password=${password}`,
	});
}

export function sendSave() {
	return fetch(`${host}/save`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: "save=true",
	});
}
