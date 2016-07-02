var Utils =
{
	cell_size: 40,

	insert_after: function(new_node, ref_node)
	{
		ref_node.parentNode.insertBefore(new_node, ref_node.nextSibling);
	}
}
