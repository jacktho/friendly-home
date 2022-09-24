<script lang="ts">
	async function set(params: { friendlyName: string; payload: object }) {
		await fetch('/api/zigbee2mqtt', {
			method: 'POST',
			body: JSON.stringify(params),
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	async function onHandler() {
		set({ friendlyName: 'light-living-room-lamp', payload: { state: 'ON' } });
	}

	async function offHandler() {
		set({ friendlyName: 'light-living-room-lamp', payload: { state: 'OFF' } });
	}
</script>

<button
	class="border text-gray-900 bg-yellow-300 text-white p-2 m-4 rounded shadow"
	on:click={onHandler}>On</button
>
<button
	class="border text-gray-900 bg-gray-300 text-white p-2 m-4 rounded shadow"
	on:click={offHandler}>Off</button
>
