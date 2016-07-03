var Engine =
{
	robot: undefined,

	init: function()
	{
		Grid.init();
		this.robot = new Robot();
		this.robot.create();
		this.robot.set_position(9, 3);

		var self = this;
		setTimeout(function()
		{
			self.robot.move_forward();
		}, 1000);
	}
}
