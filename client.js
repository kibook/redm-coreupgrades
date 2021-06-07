for (var i = 0; i < 9; ++i) {
	const b1 = new ArrayBuffer(8 * 12);
	const a2 = new DataView(b1);

	const b2 = new ArrayBuffer(8 * 12);
	const a3 = new DataView(b2);

	Citizen.invokeNative("0xCB5D11F9508A928D", 1, a2, a3, GetHashKey("UPGRADE_STAMINA_TANK_1"), 1084182731, 1, 752097756);
}
