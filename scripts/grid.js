var Grid =
{
	dom: undefined,
	width: undefined,
	height: undefined,
	cells: [],

	init: function()
	{
		this.dom = document.getElementById("grid");
		this.create(20, 10);
	},

	create: function(w, h)
	{
		this.set_size(w, h);

		for (var x = 0; x < h; ++x)
		{
			this.cells[x] = [];
			for (var y = 0; y < w; ++y)
				this.add_cell(x, y);
		}
	},

	set_size: function(w, h)
	{
		this.width = w;
		this.height = h;
		this.dom.style.width = w * Utils.cell_size + 1 + "px";
		this.dom.style.height = h * Utils.cell_size + 1 + "px";
	},

	add_cell: function(x, y)
	{
		this.cells[x][y] = new Cell();
		this.cells[x][y].init();
		this.dom.appendChild(this.cells[x][y].dom)
	}
}

function Cell()
{

	this.init = function()
	{
		this.dom = document.createElement("span");
		this.dom.className = "cell";
		this.walkable = true;
	}

	this.set_walkable = function(bool)
	{
		this.walkable = bool;
	}

	this.destroy = function()
	{
		this.dom.parentNode.removeChild(this.dom);
	}
}
