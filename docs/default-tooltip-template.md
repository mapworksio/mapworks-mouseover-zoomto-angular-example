# Default Studio Template for Tooltips

This is the standard Studio template used to display the tooltip for a
feature on the map.

Note that:

1. Studio utilises the [Underscore](https://underscorejs.org) library
   to compile and render these templates.

2. A reference to Studio's Underscore instance is available via the `MapworksStudio` class.

3. The `<div class="arrow"></div>` element is used to position an arrow pointing to the
   feature on the map.

This is the template:

```html
<div id="studio-tooltip-mouseover" class="studio-tooltip" >
	<div class="popover popover-mouseover bottom" style="">
		<div class="arrow"></div>
		<h3 class="popover-title">
			<%= DOMPurify.sanitize(displayName) %>
		</h3>
	</div>
</div>
```
