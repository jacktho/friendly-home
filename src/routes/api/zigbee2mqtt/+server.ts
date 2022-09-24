import { connect } from 'mqtt';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { friendlyName, payload } = await request.json();
	const client = connect('mqtt://docker-vm.pvt');

	client.on('connect', function () {
		client.subscribe(`zigbee2mqtt/${friendlyName}/set`, function (err) {
			if (!err) {
				client.publish('zigbee2mqtt/light-living-room-lamp/set', JSON.stringify(payload));
			}
		});
	});

	return json({ message: 'ok' });
}
