var Engine =
{
	robot: undefined,

	init: function()
	{
		Grid.init();
		this.robot = new Robot();
		this.robot.create();
		this.robot.set_position(9, 3);
	}
}
