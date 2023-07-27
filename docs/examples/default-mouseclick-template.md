# Default Studio Template for Tooltips

This is the standard Studio template used to display the mouse-click for a
feature on the map.

Note that:

1. Studio utilises the [Underscore](https://underscorejs.org) library
   to compile and render these templates.

2. A reference to Studio's Underscore instance is available via the `MapworksStudio` class.

3. The `<div class="arrow"></div>` element is used to position an arrow pointing to the
   feature on the map.

This is the template:

```html
<%
	var link = layerIdentifyLink;
	var tag = link ? 'a' : 'span';

	var formattedArea = map
	.getModule('analysis')
	.formatMeasurement(model.getArea(), true, areaUnit);

	var formattedLength = map
	.getModule('analysis')
	.formatMeasurement(model.getLength(), false, distanceUnit);

	var isLink = function(val){
		if(typeof val === 'string'){
			try{
				new URL(val);
			}catch(e){
				return false;
			}
			return true;
		}
		return false;
	}

	var printJsonVal = function(val){
		return Array.isArray(val)
		? '[Array]'
		: _.isObject(val)
			? '[Object]'
			: _.isNull(val)
				? ''
				: val;
	}
%>

<div id="studio-tooltip-click" class="studio-tooltip">
	<div class="popover popover-click">
		<div class="arrow" />
		<h3 class="popover-title popover-title-click">
			<span>
				<button id="close" type="button" class="close" data-dismiss="modal">
					<span aria-hidden="true">&times;</span>
					<span class="sr-only">Close</span>
				</button>
				<button
					id="show-all-visible"
					type="button"
					class="show-all-visible"
					title="All visible features info"
					>
					<span aria-hidden="true" class="glyphicon glyphicon-list"></span>
					<span class="sr-only">All visible features info</span>
				</button>
			</span>
			<a id="pk" href="javascript:void(0)">
				<%= DOMPurify.sanitize(displayName) %>
				<input id="pk-input" style="display:none" value="<%=id%>" />
			</a>
			<br />
			<<%- tag %>
				href="#"
				class="text-muted small <%- link ? 'layer-title' : '' %>"
				>
				<%- layer ? displayLayerName : 'Untitled' %>
			</<%- tag %>>
		</h3>
		<div class="details">
		<%
			if (fieldsVisible) {
				if (!_.isEmpty(sortedFields)) {
		%>
					<table class="table table-striped table-hover table-condensed">
						<tbody>
						<%
							for (var i = 0; i < sortedFields.length; i++) {
								var item = sortedFields[i];
								if (Array.isArray(item.value)) {
						%>
							<tr>
								<td colspan="2"><%- item.title %></td>
							</tr>
							<tr>
								<td colspan="2">
									<% if (item.value.length) { %>
										<table class="table table-striped table-hover table-condensed subtable">
											<tbody>
												<% item.value.forEach(function(listItem){ %>
													<tr>
														<td>
															<%
																var val = printJsonVal(listItem);
																if(isLink(val)){
															%>
																<a href="<%= val %>" target="_blank">
																	<%- val %>
																</a>
															<%
																}else{
															%>
																<%= DOMPurify.sanitize(val) %>
															<% } %>
														</td>
													</tr>
												<% }) %>
											</tbody>
										</table>
									<% } else { %>
										<div class="subtable">Empty Array</div>
									<% } %>
								</td>
							</tr>
							<% } else if (_.isObject(item.value)){ %>
							<tr>
								<td colspan="2"><%- item.title %></td>
							</tr>
							<tr>
								<td colspan="2">
									<% if (_.size(item.value)) { %>
										<table class="table table-striped table-hover table-condensed subtable">
											<tbody>
												<%
													for (var k in item.value) {
														var v = item.value[k];
												%>
													<tr>
														<td title="<%= k %>"><%- k %></td>
														<td>
															<%
																var val = printJsonVal(v);
																if(isLink(val)){
															%>
																<a href="<%= val %>" target="_blank">
																	<%- val %>
																</a>
															<%
																}else{
															%>
																<%= DOMPurify.sanitize(val) %>
															<% } %>
														</td>
													</tr>
												<% } %>
											</tbody>
										</table>
									<% } else { %>
										<div class="subtable">Empty Object</div>
									<% } %>
								</td>
							</tr>
							<% } else { %>
							<tr class="<%= item.isKey ? 'pk' : '' %>">
								<td title="<%= item.title %>"><%- item.title %></td>
								<td>
									<%
										var val = item.value === null ? '' : item.value;
										if(isLink(val)){
									%>
										<a href="<%= val %>" target="_blank">
											<%- val %>
										</a>
									<%
										}else{
									%>
										<%= DOMPurify.sanitize(val) %>
									<% } %>
								</td>
							</tr>
							<% } %>
						<% } %>
						</tbody>
					</table>
			<% } else { %>
				<div
					id="spin"
					class="fa fa-spinner studio-spin-loading btn-lg col-md-offset-5"
					/>
			<% } %>
		<% } else { %>
			<div class="alert alert-info">
				There are no fields visible for this feature.
			</div>
		<% } %>
		</div>
		<div class="popover-footer">
		<%
			if (model.getType() !== 1) { // Point
				var lengthText = "Perimeter";
				if (model.getType() === 2) { // Polyline
					lengthText = "Length";
				}
		%>
				<table class="table no-margin table-condensed">
					<colgroup>
						<col class="col-xs-4">
						<col class="col-xs-4">
					</colgroup>
					<tbody>
						<% if (model.getType() !== 2) { // Polyline %>
							<td>
								Area: <%- formattedArea %>
							</td>
						<% } %>
						<td>
							<%- lengthText %>: <%- formattedLength %>
						</td>
					</tbody>
				</table>
		<% } %>
		</div>
	</div>
</div>
```
