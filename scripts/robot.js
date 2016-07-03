function Robot()
{
	this.create = function()
	{
		this.dom = document.createElement("span");
		this.dom.className = "robot";
		this.direction = Utils.right;
		Grid.dom.appendChild(this.dom);
	}

	this.set_position = function(x, y)
	{
		this.posx = x;
		this.posy = y;
		this.dom.style.left = x * Utils.cell_size + "px";
		this.dom.style.top = y * Utils.cell_size + "px";
	}

	this.set_x = function(x)
	{
		this.posx = x;
		this.dom.style.left = x * Utils.cell_size + "px";
	}

	this.set_y = function(y)
	{
		this.posy = y;
		this.dom.style.top = y * Utils.cell_size + "px";
	}

	this.show = function()
	{
		this.dom.style.display = "block";
	}

	this.hide = function()
	{
		this.dom.style.display = "none";
	}

	this.move_forward = function()
	{
		if (this.direction == Utils.Right)
		{
			if (this.posx < Grid.width - 1)
			{
				this.set_x(this.posx + 1);
			}
		}
	}

	this.destroy = function()
	{
		this.dom.parentNode.removeChild(this.dom);
	}
}
