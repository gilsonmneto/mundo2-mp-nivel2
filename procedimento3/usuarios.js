let vue = Vue.createApp({
	data() {
		return {
			users: [],
		};
	},
	async created() {
		this.users = await loadUsers();
	},
}).mount("#usuarios");

async function loadUsers() {
	let url = "https://reqres.in/api/users?per_page=10";
	let response = await fetch(url, { method: "GET" });
	let text_json = await response.json();
	return text_json["data"];
}
